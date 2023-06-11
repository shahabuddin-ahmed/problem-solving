/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const dummyRow = new Array(row).fill(-1);
    const dummyCol = new Array(col).fill(-1);
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 0) {
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (dummyRow[i] == 0 || dummyCol[j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

const result = setZeroes([
    [9, 8, 5, 1, 8, 0, 7, 3, 4, 1, 2, 0],
    [1, 4, 3, 3, 8, 1, 6, 9, 3, 5, 7, 3],
    [2, 5, 0, 9, 5, 9, 6, 4, 8, 4, 7, 6],
    [4, 5, 2, 0, 8, 4, 3, 1, 0, 6, 4, 8],
    [9, 0, 9, 5, 7, 7, 0, 9, 2, 2, 0, 9],
    [2, 7, 6, 2, 1, 3, 0, 7, 0, 2, 7, 0],
    [6, 0, 2, 8, 9, 6, 6, 0, 9, 6, 7, 6],
    [3, 8, 8, 7, 0, 8, 9, 4, 7, 5, 6, 0],
    [0, 9, 7, 3, 1, 7, 3, 0, 9, 7, 8, 8],
    [6, 7, 1, 5, 3, 8, 3, 8, 6, 1, 7, 9],
    [2, 6, 3, 9, 1, 2, 2, 4, 1, 9, 7, 4],
    [8, 0, 4, 8, 8, 5, 8, 4, 2, 9, 1, 7],
]);
console.log(result);
