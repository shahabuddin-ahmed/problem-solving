const TreeNode = require("./TreeNode");

class Solution {
	/**
	 * Deserializes the binary tree passed as a
	 * serialized compressed string.
	 *
	 * @param {string} compressed Serialized binary tree.
	 * @return {TreeNode} Root of the constructed tree.
	 */
	decompress(compressed) {
		const treeNodes = compressed.split(",").map(node => node === "*" ? null : new TreeNode(parseInt(node)));
		const queue = [];
		let node = treeNodes[0];
		queue.unshift(node);
		let childrenAdded = 0;

		for (let i = 1; i < treeNodes.length; i++) {
			const nextNode = treeNodes[i];
			if (childrenAdded === 0) {
				node = queue.pop();
				node.left = nextNode;
				childrenAdded++;
			} else {
				node.right = nextNode;
				childrenAdded = 0;
			}

			if (nextNode !== null) queue.unshift(nextNode);
		}
		return treeNodes[0];
	}
}

module.exports = Solution;