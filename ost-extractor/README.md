## ost-extractor

OST extractor for certain rhythm game, modified from [PhiExtract](https://github.com/YidaozhanYa/PhiExtract).

### Usage

```bash
# in virtual environment
pip install -r requirements.txt
```

```bash
python3 phi_extract.py <assets folder> <songs json> <output directory>
```
You can extract assets folder from the game's APK or OBB file.

`songs.json` can be generated from [`metadata-dumper`](../metadata-dumper/README.md), or obtained from [here](https://beerpiss.github.io/phigros-song-info/songs.json).

### Credits

`binary_reader.py` `catalog.py`: https://github.com/kvarenzn/phisap
