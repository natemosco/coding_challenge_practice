function nsew(j, i, grid) {
    let n = grid[i - 1] ? grid[i - 1][j] : undefined;
    let s = grid[i + 1] ? grid[i + 1][j] : undefined;
    let e = grid[i] ? grid[i][j + 1] : undefined;
    let w = grid[i] ? grid[i][j - 1] : undefined;
    let c = grid[i] ? grid[i][j] : undefined;
    if (c && Number(c)) grid[i][j] = 0;
    if (n && Number(n)) {
        // grid[i - 1][j] = 0;
        nsew(j, i - 1, grid);
    }
    if (s && Number(s)) {
        // grid[i + 1][j] = 0;
        nsew(j, i + 1, grid);
    }
    if (e && Number(e)) {
        // grid[i][j + 1] = 0;
        nsew(j + 1, i, grid);
    }
    if (w && Number(w)) {
        // grid[i][j - 1] = 0;
        nsew(j - 1, i, grid);
    }
}

// var numIslands = function(grid) {
function numIslands(grid) {
    let height = grid.length;
    let width = grid[0].length;
    let islandCount = 0;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] == 1) {
                nsew(j, i, grid);
                console.log(grid, "1111111");
                islandCount += 1;
            }
        }
    }
    // console.log(grid);
    return islandCount;
}

let mygrid = [
    ["1", "1", "1", "1", "1", "1", "1"],
    ["0", "0", "0", "0", "0", "0", "1"],
    ["1", "1", "1", "1", "1", "0", "1"],
    ["1", "0", "0", "0", "1", "0", "1"],
    ["1", "0", "1", "0", "1", "0", "1"],
    ["1", "0", "1", "1", "1", "0", "1"],
    ["1", "1", "1", "1", "1", "1", "1"],
];
console.log(numIslands(mygrid));
