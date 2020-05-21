function twoStrings(s1, s2) {
    if (s1.length == 0 || s2.length == 0) {
        return "NO";
    }

    let reference = new Set();

    for (let letter of s1) {
        reference.add(letter);
    }

    for (let compliment of s2) {
        if (reference.has(compliment)) {
            return "YES";
        }
    }

    return "NO";
}
