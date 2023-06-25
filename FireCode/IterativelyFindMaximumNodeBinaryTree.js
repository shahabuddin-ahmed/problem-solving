class Solution {
    /**
     * Checks if the binary tree contains the target value.
     *
     * @param {TreeNode} root Root TreeNode of the binary tree.
     * @return {number} Maximum integer data value in the tree.
     */
    maxData(root) {
        // Add your code here
        if (!root) {
            return 0;
        }

        return Math.max(
            root.data,
            this.maxData(root.left),
            this.maxData(root.right)
        );
    }
}

module.exports = Solution;
