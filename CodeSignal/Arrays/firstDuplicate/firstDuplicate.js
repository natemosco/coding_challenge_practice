functio"n":firstDuplicate(a) {
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


"a":2,"b":2,"g":2,"ch":2,"aj":2,"bk":2,"kka":2,"diu":2