/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let arr = [],
        r = matrix.length,
        c = matrix[0].length,
        direction = 0,
        left = 0,
        right = c - 1,
        bottom = 0,
        top = r - 1;

    while (arr.length < r * c) {
        if (direction == 0) {
            for (let i = left; i <= right; i++) {
                arr.push(matrix[bottom][i]);
            }
            bottom++;
            direction++;
        } else if (direction == 1) {
            for (let i = bottom; i <= top; i++) {
                arr.push(matrix[i][right]);
            }
            right--;
            direction++;
        } else if (direction == 2) {
            for (let i = right; i >= left; i--) {
                arr.push(matrix[top][i]);
            }
            top--;
            direction++;
        } else if (direction == 3) {
            for (let i = top; i >= bottom; i--) {
                arr.push(matrix[i][left]);
            }
            left++;
            direction++;
        }
        if (direction == 4) direction = 0;
    }
    return arr;
};
