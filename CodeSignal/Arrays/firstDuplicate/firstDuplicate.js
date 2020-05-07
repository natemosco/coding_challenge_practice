function firstDuplicate(a) {
    let ref = {};
    for (let num of a) {
        if (ref[num] == undefined) {
            ref[num] = "exists";
        } else if (ref[num]) {
            return num;
        }
    }
    return -1;
}
