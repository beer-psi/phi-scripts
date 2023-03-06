## metadata-dumper
dumps basic metadata from a running game instance. requires [frida](https://frida.re/)
to be injected into the app one way or another.

### usage
```sh
npm install
npm run build
frida -U -f com.PigeonGames.Phigros -l _agent.js
```

after script finishes, the metadata dump is saved to `/storage/emulated/0/Download/songs.json`.
edit `agent/index.ts` to change the save location.

### schema
`songs.json` is a `Song[]`, with `Song` being:
```ts
interface Song {
    composer: string;
    illustrator: string;
    songsId: string;
    songsKey: string;
    songsName: string;
    songsTitle: string;
    charter: string[];
    levels: string[];
    difficulty: number[];
}
```
