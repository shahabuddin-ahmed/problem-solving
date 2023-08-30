/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let sums = [];
    let counts = [];
    doTraversal(root, 0, sums, counts);
    let results = [];
    for (let i = 0; i < sums.length; i++) {
        results.push(sums[i] / counts[i]);
    }
    return results;
};

function doTraversal(node, level, sums, counts) {
    if (!node) {
        return;
    }

    if (!sums[level]) {
        sums[level] = 0;
    }
    sums[level] += node.data;

    if (!counts[level]) {
        counts[level] = 0;
    }
    counts[level]++;

    doTraversal(node.left, level + 1, sums, counts);
    doTraversal(node.right, level + 1, sums, counts);
}
