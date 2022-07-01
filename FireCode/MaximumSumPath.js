class Solution {
	/**
	 * Returns the maximum sum along two nodes
	 * in the provided binary tree.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary tree.
	 * @return {number} Maximum sum path along two nodes in the tree.
	 */
	maxPathSum(root) {
		if (!root) {
			return 0;
		}

		return root.data + this.maximumSumPath(root.left) + this.maximumSumPath(root.right);
	}

	maximumSumPath(root) {
		if (!root) {
			return 0;
		}
		return root.data + Math.max(this.maximumSumPath(root.left), this.maximumSumPath(root.right));
	}
}

module.exports = Solution;