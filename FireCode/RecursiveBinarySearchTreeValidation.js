class Solution {
    /**
     * Checks if the passed root tree node belongs to
     * a valid binary search tree.
     *
     * @param {TreeNode} root Root TreeNode of the binary tree.
     * @return {boolean} True if the passed node is the root of a valid BST.
     */
    isValidBst(root) {
        if (!root) {
            return true;
        }

        const isLeftValid = !root.left || root.left.data < root.data;
        const isRightValid = !root.right || root.right.data > root.data;
        return (
            isLeftValid &&
            isRightValid &&
            this.isValidBst(root.left) &&
            this.isValidBst(root.right)
        );
    }
}

module.exports = Solution;
