/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    return matrix.flat().sort((a, b) => a - b)[k - 1];
};

const result = kthSmallest([
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
]);

console.log(result);
