import "frida-il2cpp-bridge";

function netStringArrayToStringArray(arr: Il2Cpp.Array<Il2Cpp.String>) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        ret[i] = arr.get(i).content;
    }
    return ret;
}

function netFloatArrayToFloatArray(arr: Il2Cpp.Array<Il2Cpp.Object>): number[] {
    let ret: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        ret[i] = arr.get(i) as unknown as number;
    }
    return ret;
}

Il2Cpp.perform(() => {
    Reflect.defineProperty(Il2Cpp, "unityVersion", { value: "2019.4.31f1c1" });

    const img = Il2Cpp.Domain.assembly("Assembly-CSharp").image;
    console.log("got img");

    const SongBase = img.class("SongBase");
    console.log("obtained class SongBase");

    let instance = Il2Cpp.GC.choose(SongBase)[0];
    while (instance === undefined) {
        instance = Il2Cpp.GC.choose(SongBase)[0];
    }
    console.log("obtained instance");

    let songs: Record<string, any>[] = []
    const songList = instance.method("get_AllSongs").invoke() as Il2Cpp.Object;
    const count = songList.method("get_Count").invoke() as number;
    console.log(`count: ${count}`);
    for (let i = 0; i < count; i++) {
        const song = songList.method("get_Item").invoke(i) as Il2Cpp.Object;
        songs[i] = {};    
        ["composer", "illustrator", "songsId", "songsKey", "songsName", "songsTitle"].forEach(item => {
            songs[i][item] = (song.field(item).value as Il2Cpp.String).content;
        });

        ["charter", "levels"].forEach(item => {
            let val = song.field(item).value as Il2Cpp.Array<Il2Cpp.String>;
            songs[i][item] = netStringArrayToStringArray(val);
        });

        songs[i]["difficulty"] = netFloatArrayToFloatArray(song.field("difficulty").value as Il2Cpp.Array<Il2Cpp.Object>)
            .map(it => Number(it.toFixed(1)));
        
        // songs[i]["unlockInfo"] = {};
        // const unlockInfoRaw = song.field("unlockInfo").value as Il2Cpp.Array<Il2Cpp.Object>;
        // for (let j = 0; j < unlockInfoRaw.length; j++) {
        //     const info = unlockInfoRaw.get(j) as Il2Cpp.Object;
        //     songs[i]["unlockInfo"][j] = {};
        //     songs[i]["unlockInfo"][j]["unlockType"] = info.field("unlockType").value as unknown as number;
        //     songs[i]["unlockInfo"][j]["unlockInfo"] = netStringArrayToStringArray(info.field("unlockInfo").value as Il2Cpp.Array<Il2Cpp.String>);
        // }
    }
    const file = new File("/storage/emulated/0/Documents/songs.json", "w")
    file.write(JSON.stringify(songs, null, 4))
    file.flush()
    file.close()
    console.log("Written to /storage/emulated/0/Documents/songs.json")

})
