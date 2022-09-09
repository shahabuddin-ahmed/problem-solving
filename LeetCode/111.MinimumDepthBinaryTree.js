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
 * @return {number}
 */
 var minDepth = function(root) {
    const arrCounter = [];
    countDepth(root, 1, arrCounter);
    return arrCounter.length ? Math.min(...arrCounter) : 0;
};

var countDepth = function(root, counter, arrCounter) {
		if (!root) {
        return;
    }

    if (!root.left && !root.right) {
        arrCounter.push(counter);
    }

    counter++;

    countDepth(root.left, counter, arrCounter);
    countDepth(root.right, counter, arrCounter);
}