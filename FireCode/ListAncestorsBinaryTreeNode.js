class Solution {
	/**
	 * Returns the `data` of all ancestors of a node with
	 * data = n.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary tree.
	 * @param {number} n Data of the target node.
	 * @return {Array<number>} Array containing data of all ancestors of the target node.
	 */
	listAncestors(root, n) {
		const arrNodes = [];
		this.pushNoeds(root, arrNodes, n);
		return arrNodes;
	}

	pushNoeds(root, arrNodes, n, isExist) {
		if (!root) {
			return false;
		} else if (root.data === n) {
			return true;
		} else if (this.pushNoeds(root.left, arrNodes, n) || this.pushNoeds(root.right, arrNodes, n)) {
			arrNodes.push(root.data);
			return true;
		} else {
			return false;
		}
	}
}

module.exports = Solution;