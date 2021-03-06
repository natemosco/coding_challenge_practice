function areFollowingPatterns(strings, patterns) {
    if (strings.length != patterns.length) {
        return false;
    }

    let hashPS = {};
    let hashSP = {};

    for (let i = 0; i < strings.length; i++) {
        let currentPattern = patterns[i];
        let currentString = strings[i];

        if (!hashPS[currentPattern]) {
            hashPS[currentPattern] = currentString;
        } else if (hashPS[currentPattern] != currentString) {
            return false;
        }

        if (!hashSP[currentString]) {
            hashSP[currentString] = currentPattern;
        } else if (hashSP[currentString] != currentPattern) {
            return false;
        }
    }

    return true;
}
let strings = ["cat", "dog", "dog"];
let patterns = ["a", "b", "b"];

let strings2 = ["cat", "dog", "dog"];
let patterns2 = ["a", "b", "c"];

let strings3 = [
    "syf",
    "syf",
    "oxerkx",
    "oxerkx",
    "syf",
    "xgwatff",
    "pmnfaw",
    "t",
    "ajyvgwd",
    "xmhb",
    "ajg",
    "syf",
    "syf",
    "wjddgkopae",
    "fgrpstxd",
    "t",
    "i",
    "psw",
    "wjddgkopae",
    "wjddgkopae",
    "oxerkx",
    "zf",
    "jvdtdxbefr",
    "rbmphtrmo",
    "syf",
    "yssdddhyn",
    "syf",
    "jvdtdxbefr",
    "funnd",
    "syf",
    "syf",
    "wd",
    "syf",
    "vnntavj",
    "wjddgkopae",
    "yssdddhyn",
    "wcvk",
    "wjddgkopae",
    "fh",
    "zf",
    "gpkdcwf",
    "qkbw",
    "zf",
    "teppnr",
    "jvdtdxbefr",
    "fmn",
    "i",
    "hzmihfrmq",
    "wjddgkopae",
    "syf",
    "vnntavj",
    "dung",
    "kn",
    "qkxo",
    "ajyvgwd",
    "fs",
    "kanixyaepl",
    "syf",
    "tl",
    "yzhaa",
    "dung",
    "wa",
    "syf",
    "jtucivim",
    "tl",
    "kanixyaepl",
    "oxerkx",
    "wjddgkopae",
    "ey",
    "ai",
    "zf",
    "di",
    "oxerkx",
    "dung",
    "i",
    "oxerkx",
    "wmtqpwzgh",
    "t",
    "beascd",
    "me",
    "akklwhtpi",
    "nxl",
    "cnq",
    "bighexy",
    "ddhditvzdu",
    "funnd",
    "wmt",
    "dgx",
    "fs",
    "xmhb",
    "qtcxvdcl",
    "thbmn",
    "pkrisgmr",
    "mkcfscyb",
    "x",
    "oxerkx",
    "funnd",
    "iesr",
    "funnd",
    "t",
];
let patterns3 = [
    "enrylabgky",
    "enrylabgky",
    "dqlqaihd",
    "dqlqaihd",
    "enrylabgky",
    "ramsnzhyr",
    "tkibsntkbr",
    "l",
    "bgtws",
    "xwuaep",
    "o",
    "enrylabgky",
    "enrylabgky",
    "e",
    "auljuhtj",
    "l",
    "d",
    "jfzokgt",
    "e",
    "e",
    "dqlqaihd",
    "fgglhiedk",
    "nj",
    "quhv",
    "enrylabgky",
    "oadats",
    "enrylabgky",
    "nj",
    "zwupro",
    "enrylabgky",
    "enrylabgky",
    "pyw",
    "enrylabgky",
    "bedpuycdp",
    "e",
    "oadats",
    "i",
    "e",
    "fobyfznrxm",
    "fgglhiedk",
    "irxtd",
    "oyvf",
    "fgglhiedk",
    "ebpp",
    "nj",
    "p",
    "d",
    "cufxylz",
    "e",
    "enrylabgky",
    "bedpuycdp",
    "mitzb",
    "shsnw",
    "papmvh",
    "bgtws",
    "chtp",
    "pze",
    "enrylabgky",
    "klp",
    "wpx",
    "mitzb",
    "fo",
    "enrylabgky",
    "bvcigrirhe",
    "klp",
    "pze",
    "dqlqaihd",
    "e",
    "iufunacwjo",
    "bubgww",
    "fgglhiedk",
    "og",
    "dqlqaihd",
    "mitzb",
    "d",
    "dqlqaihd",
    "mysidv",
    "l",
    "naj",
    "clftmrwl",
    "fjb",
    "zjjnrffb",
    "sh",
    "gcn",
    "ouispza",
    "zwupro",
    "c",
    "rdank",
    "chtp",
    "xwuaep",
    "jufhm",
    "iyntbgm",
    "sufs",
    "mkivpe",
    "bxdd",
    "dqlqaihd",
    "zwupro",
    "vzxbbculgv",
    "zwupro",
    "l",
];
console.log(areFollowingPatterns(strings, patterns), "correct answer: true");
console.log(areFollowingPatterns(strings2, patterns2), "correct answer: false");
console.log(areFollowingPatterns(strings3, patterns3), "correct answer: true");
