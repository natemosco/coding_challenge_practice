function staircase(n) {
    let spaces = n;
    let hashes = 0;

    for (let i = 0; i < n; i++) {
        spaces -= 1;
        hashes++;
        console.log(" ".repeat(spaces) + "#".repeat(hashes));
    }
}
