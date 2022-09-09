const TreeNode = require("./TreeNode");

class Solution {
	/**
	 * Returns the number of half nodes in the tree.
	 *
	 * @param {TreeNode} root Root TreeNode of the tree.
	 * @return {number} Number of half nodes in the tree.
	 */
	countHalf(root) {
		const counterArr = [];
		this.countNodes(root, counterArr);
		return counterArr.length;
	}

	countNodes(root, counterArr) {
		if (!root) {
			return;
		}

		if (root.left && !root.right || !root.left && root.right) {
			counterArr.push(1);
		}

		this.countNodes(root.left, counterArr);
		this.countNodes(root.right, counterArr);
	}
}

module.exports = Solution;

// top solutions
// const TreeNode = require("./TreeNode");

// class Solution {
//   /**
//    * Returns the number of half nodes in the tree.
//    *
//    * @param {TreeNode} root Root TreeNode of the tree.
//    * @return {number} Number of half nodes in the tree.
//    */
//   countHalf(root) {
//     if (root === null) return 0;
//     const nodeWeight = (root.left !== null ^ root.right !== null) ? 1 : 0;
//     return nodeWeight + this.countHalf(root.left) + this.countHalf(root.right);
//   }
// }

// module.exports = Solution;