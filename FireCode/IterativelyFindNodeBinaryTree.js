class Solution {
    /**
     * Checks if the binary tree contains the target value.
     *
     * @param {TreeNode} root Root TreeNode of the binary tree.
     * @param {number} n Target integer to search for.
     * @return {boolean} True if the target value is found, false otherwise.
     */
    findNode(root, n) {
        return this.searchNode(root, n);
    }

    searchNode(root, n) {
        if (!root) {
            return false;
        }

        if (root.data === n) {
            return true;
        }

        return this.searchNode(root.left, n) || this.searchNode(root.right, n);
    }
}

module.exports = Solution;
