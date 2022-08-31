class Solution {
	/**
	 * Returns the maximum sum along two nodes
	 * in the provided binary tree.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary tree.
	 * @return {number} Maximum sum path along two nodes in the tree.
	 */
	maxPathSumWithNeg(root) {
		const arr = [Number.NEGATIVE_INFINITY];
		this.sumNodes(root, arr);
		return arr[0];
	}

	sumNodes(root, arr) {
		if (!root) {
			return 0;
		}

		const leftMaxSum = Math.max(0, this.sumNodes(root.left, arr));
		const rightMaxSum = Math.max(0, this.sumNodes(root.right, arr));

		arr[0] = Math.max(
			arr[0],
			root.data + leftMaxSum + rightMaxSum
		);

		return Math.max(root.data + leftMaxSum, root.data + rightMaxSum);
	}
}

module.exports = Solution;

// another solutions

/**
 * if (!root) return -Infinity;
    return Math.max(
      this.maxPathSumWithNeg(root.left),
      this.maxPathSumWithNeg(root.right),
      root.data + Math.max(0, maxPathToLeaf(root.left)) + Math.max(0, maxPathToLeaf(root.right))
    );
 */