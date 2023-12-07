var numIslands = function (grid) {
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == "1") {
                count++;
                callDFS(row, col, grid);
            }
        }
    }

    return count;
};

function callDFS(row, col, grid) {
    if (
        row < 0 ||
        row >= grid.length ||
        col < 0 ||
        col >= grid[row].length ||
        grid[row][col] == "0"
    ) {
        return;
    }

    grid[row][col] = "0";

    callDFS(row + 1, col, grid); // down
    callDFS(row - 1, col, grid); // up
    callDFS(row, col + 1, grid); // right
    callDFS(row, col - 1, grid); // left
}
