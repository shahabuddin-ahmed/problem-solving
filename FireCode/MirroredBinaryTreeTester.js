class Solution {
	/**
	 * Checks if two input binary trees are mirror images
	 * of each other.
	 *
	 * @param {TreeNode} t1 Root TreeNode of the first tree.
	 * @param {TreeNode} t2 Root TreeNode of the second tree.
	 * @return {boolean} True if the input trees are mirror images of each other.
	 */
	areMirrored(t1, t2) {
		this.reverseTree(t1);
		const arr = [true];
		this.compareTree(t1, t2, arr);
		return arr[0];
	}

	reverseTree(node) {
		if (!node) {
			return 1;
		}

		const temp = node.left;
		node.left = node.right;
		node.right = temp;

		this.reverseTree(node.left);
		this.reverseTree(node.right);
	}

	compareTree(tree1, tree2, arr) {
		if (!tree1 && !tree2) {
			return;
		}

		if (!tree1 || !tree2 || (tree1.data !== tree2.data)) {
			return arr[0] = false;
		}

		this.compareTree(tree1.left, tree2.left, arr);
		this.compareTree(tree1.right, tree2.right, arr);
	}
}
  
module.exports = Solution;