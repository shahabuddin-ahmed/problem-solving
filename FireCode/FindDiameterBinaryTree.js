const TreeNode = require("./TreeNode");

class Solution {
	/**
	 * Returns the diameter of the binary tree.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary tree.
	 * @return {number} Integer diameter of the tree.
	 */
	treeDiameter(root) {
		const leftCounterArr = [0];
		const rightCounterArr = [0];
		this.countLevel(root.left, 0, leftCounterArr);
		this.countLevel(root.right, 0, rightCounterArr);
		return 1 + Math.max(...leftCounterArr) + Math.max(...rightCounterArr);
	}

	countLevel(root, counter, counterArr) {
		if (!root) {
			return counter;
		}

		counter++;
		counterArr.push(counter);

		this.countLevel(root.left, counter, counterArr);
		this.countLevel(root.right, counter, counterArr);
	}

}

module.exports = Solution;

// top solutions
// treeDiameter(root) {
//     const diameterHolder = [0];
//     this.search(root, diameterHolder);
//     return diameterHolder[0];
//   }

//   /**
//    * Recursive helper method that returns the height of the passed
//    * binary tree node. It also updates a container variable
//    * with the maximum diameter encountered so far.
//    *
//    * @param {TreeNode} node Node of the binary tree.
//    * @param {Array<number>} diameterHolder Pass by reference max diameter.
//    * @return {number} Height of the binary tree.
//    */
//   search(node, diameterHolder) {
//     if (node === null) return 0;
//     const leftHeight = this.search(node.left, diameterHolder);
//     const rightHeight = this.search(node.right, diameterHolder);
//     diameterHolder[0] = Math.max(diameterHolder[0], 1 + leftHeight + rightHeight);
//     return 1 + Math.max(leftHeight, rightHeight);
// }