function checkMagazine(magazine, note) {
    if (magazine.length < note.length) {
        console.log("No");
        return;
    } else if (note.length == 0) {
        console.log("No");
        return;
    }

    let refTable = {};

    for (let word of magazine) {
        !refTable[word] ? (refTable[word] = 1) : (refTable[word] += 1);
    }

    let success = false;
    for (let noteWord of note) {
        if (!refTable[noteWord]) {
            success = false;
            break;
        } else {
            refTable[noteWord] -= 1;
            success = true;
        }
    }

    success ? console.log("Yes") : console.log("No");
}
