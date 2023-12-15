import argparse
import functools
import json
import struct

from binary_reader import BinaryReader


def read_string(data: bytes, begin: int, offset: int):
    (strlen,) = struct.unpack_from("<i", data, begin + offset)
    
    (data,) = struct.unpack_from(f"<{strlen}s", data, begin + offset + 4)
    return data.decode("utf-8")


parser = argparse.ArgumentParser()
parser.add_argument("level0", help="Path to level0 file")
parser.add_argument("output", help="Output location", nargs="?", default="songs.json")
parser.add_argument("-o", "--offset", help="Offset of the mainSongs array", type=functools.partial(int, base=16))

args = parser.parse_args()

level0 = open(args.level0, "rb").read()

if args.offset:
    all_songs_start = args.offset
else:
    # This is retarded yeah but I don't know how unity level0 files work
    pattern = b"\x16\x00\x00\x00Glaciaxion.SunsetRay.0\x00\x00\x0A\x00\x00\x00Glaciaxion"
    pattern_len = len(pattern)

    max_index = len(level0) - pattern_len
    all_songs_start = 0
    for all_songs_start in range(max_index):
        if level0[all_songs_start:all_songs_start + pattern_len] == pattern:
            break

    if all_songs_start == max_index - 1:
        raise Exception("Could not find SongBase._allSongs")

reader = BinaryReader(level0, False)
reader.pos = all_songs_start - 4

songs = []
for key in {"mainSongs", "extraSongs", "sideStorySongs", "otherSongs"}:  # mainSongs, extraSongs, sideStorySongs, otherSongs
    for _ in range(reader.i32):
        song_id = reader.aligned_string()
        song_key = reader.aligned_string()
        song_name = reader.aligned_string()
        song_title = reader.aligned_string()
        difficulties = [round(reader.f32 * 10) / 10 for _ in range(reader.i32)]
        illustrator = reader.aligned_string()
        charters = [reader.aligned_string() for _ in range(reader.i32)]
        composer = reader.aligned_string()
        levels = [reader.aligned_string() for _ in range(reader.i32)]
        preview_time = reader.f32
        
        unlock_infos = []
        for _ in range(reader.i32):
            unlock_type = reader.i32
            unlock_info = [reader.aligned_string() for _ in range(reader.i32)]
            unlock_infos.append({ "unlockType": unlock_type, "unlockInfo": unlock_info })
        
        level_mods = []
        for _ in range(reader.i32):
            level_mod = [reader.aligned_string() for _ in range(reader.i32)]
            level_mods.append({ "levelMods": level_mod })
        
        songs.append(
            {
                "songsId": song_id,
                "songsKey": song_key,
                "songsName": song_name,
                "difficulty": difficulties,
                "illustrator": illustrator,
                "charter": charters,
                "composer": composer,
                "levels": levels,
                "previewTime": preview_time,
                "unlockInfo": unlock_infos,
                "levelMods": level_mods,
            }
        )
    

songs.sort(key=lambda x: x["songsId"])
with open(args.output, "w", encoding="utf-8") as f:
    json.dump(songs, f, indent=4, ensure_ascii=False)
