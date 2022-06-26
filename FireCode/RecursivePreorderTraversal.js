class Solution {
	/**
	 * Returns an integer array with data of nodes
	 * visited with pre-order traversal.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary tree.
	 * @return {Array<number>} Integer array containing data of visited nodes.
	 */
	preOrder(root) {
		return this.preOrderList(root, []);
	}

	preOrderList(root, list) {
		if (!root) {
			return [];
		}

		list.push(root.data);
		this.preOrderList(root.left, list);
		this.preOrderList(root.right, list);
		return list;
	}
  
}

module.exports = Solution;