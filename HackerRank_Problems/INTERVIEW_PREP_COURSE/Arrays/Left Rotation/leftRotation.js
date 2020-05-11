function rotateLeft(a, d) {
    let arr = a;
    let shifts = d;

    let right = arr.slice(d, a.length);
    let left = arr.slice(0, d);

    return [...right, ...left];
}
