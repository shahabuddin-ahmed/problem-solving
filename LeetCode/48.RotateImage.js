/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][m - 1 - j]; //middle element remains the same in the case of the first example.
            matrix[i][m - 1 - j] = temp;
        }
    }
};
