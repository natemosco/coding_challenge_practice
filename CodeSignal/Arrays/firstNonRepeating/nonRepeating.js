function firstNotRepeatingCharacter(s) {
    let obj = {};
    for (letter of s) {
        obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
    }
    let keys = Object.keys(obj);
    console.log(keys);
    console.log(obj, "obj");
    for (letter of keys) {
        if (obj[letter] == 1) {
            return letter;
        }
    }
    return "_";
}
