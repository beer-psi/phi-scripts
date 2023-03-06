import base64
import json
import sys
from pathlib import Path
from threading import Thread
import asyncio
import shutil

from catalog import Catalog

import ffmpeg
import UnityPy
from UnityPy.enums import ClassIDType
from mutagen.oggvorbis import OggVorbis
from mutagen.flac import Picture
from mutagen.id3._specs import PictureType
from pathvalidate import sanitize_filename


def ffmpeg_writer(ffmpeg_proc, wav_bytes_arr):
    chunk_size = 1024
    n_chunks = len(wav_bytes_arr) // chunk_size
    remainder_size = len(wav_bytes_arr) % chunk_size
    for i in range(n_chunks):
        ffmpeg_proc.stdin.write(wav_bytes_arr[i * chunk_size:(i + 1) * chunk_size])
    if remainder_size > 0:
        ffmpeg_proc.stdin.write(wav_bytes_arr[chunk_size * n_chunks:])
    ffmpeg_proc.stdin.close()


async def extract_single_file(asset_file, filename_map, output_dir):
    if asset_file.name in filename_map:
        target_filename: str = filename_map[asset_file.name]
        with open(asset_file, 'rb') as f:
            env = UnityPy.load(f)

        if not target_filename.startswith('Assets/Tracks/'):
            return

        target_filename_parts = target_filename.split('/')
        output_file: Path = \
            output_dir / target_filename_parts[2] / target_filename_parts[3]
        output_file.parent.mkdir(parents=True, exist_ok=True)

        if output_file.exists() or output_file.with_suffix('.ogg').exists():
            print(f'{output_file} already exists, skipping ...')
            return

        print(f'Extracting {target_filename} to {output_file} ...')

        if target_filename.endswith('.json'):
            for obj in env.objects:
                if obj.type == ClassIDType.TextAsset:
                    with output_file.open("w") as f:
                        f.write(obj.read().text)
        elif target_filename.endswith('.wav'):
            for obj in env.objects:
                if obj.type == ClassIDType.AudioClip:
                    wav_data = list(obj.read().samples.values())[0]
                    ffmpeg_process = (
                        ffmpeg
                        .input('pipe:', format='wav')
                        .output(str(output_file.with_suffix('.ogg')), **{'format':'ogg', 'acodec':'libvorbis', 'loglevel':'quiet', 'qscale:a':'6'})
                        .run_async(pipe_stdin=True, pipe_stdout=True)
                    )
                    ffmpeg_thread = Thread(
                        target=ffmpeg_writer,
                        args=(ffmpeg_process, wav_data)
                    )
                    ffmpeg_thread.start()
        elif target_filename.endswith('.png'):
            for obj in env.objects:
                if obj.type == ClassIDType.Texture2D:
                    with output_file.open("wb") as f:
                        obj.read().image.save(f)


async def main():
    assets_dir: Path = Path(sys.argv[1])
    metadata_path: Path = Path(sys.argv[2])
    output_dir: Path = Path(sys.argv[3])

    filename_map: dict[str, str] = {k: v for (k, v) in Catalog(open(assets_dir / 'aa/catalog.json', 'r')).fname_map.items() if "Illustration" in v or "music.wav" in v}
    metadata = json.load(metadata_path.open())

    for file in (assets_dir / 'aa/Android').glob('*.bundle'):
        asyncio.create_task(extract_single_file(file, filename_map, output_dir))
    await asyncio.gather(*asyncio.all_tasks() - {asyncio.current_task()})

    (output_dir / "_soundtrack").mkdir(parents=True, exist_ok=True)

    for song in metadata:
        song_id = song["songsId"]
        if not (output_dir / song_id).exists():
            continue
        
        if (output_dir / "_soundtrack" / sanitize_filename(f"{song['composer']} - {song['songsName']}.ogg")).exists():
            continue

        track = OggVorbis(output_dir / song_id / "music.ogg")
        with (output_dir / song_id / "IllustrationLowRes.png").open("rb") as f:
            data = f.read()

        picture = Picture()
        picture.data = data
        picture.mime = "image/png"
        picture.type = PictureType.COVER_FRONT
        picture.width = 512
        picture.height = 240
        picture.depth = 24

        picture_data = picture.write()
        encoded_data = base64.b64encode(picture_data)
        vcomment_value = encoded_data.decode("ascii")

        track["metadata_block_picture"] = [vcomment_value]
        track["title"] = song["songsName"]
        track["artist"] = song["composer"]
        track.save()

        shutil.copyfile(output_dir / song_id / "music.ogg", output_dir / "_soundtrack" / sanitize_filename(f"{song['composer']} - {song['songsName']}.ogg"))



if __name__ == '__main__':
    if len(sys.argv) < 4:
        print('Usage: python phi_extract.py <path to assets directory> <path to song metadata> <path to output directory>')
        exit()
    asyncio.run(main())
