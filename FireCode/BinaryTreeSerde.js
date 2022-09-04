const TreeNode = require("./TreeNode");

class Solution {
	/**
	 * Serializes the binary tree to a string.
	 *
	 * @param {TreeNode} root Root node of the binary tree.
	 * @return {string} String representation of a binary tree.
	 */
	serialize(root) {
		const preOrderNodes = [];
		this.serializePreOrder(root, preOrderNodes);
		return preOrderNodes.map(t => t === null ? "*" : t.data.toString()).join(",");
	}

	serializePreOrder(node, preOrderNodes) {
		preOrderNodes.push(node);
		if (node) {
		  this.serializePreOrder(node.left, preOrderNodes);
		  this.serializePreOrder(node.right, preOrderNodes);
		}
	}

	/**
	 * Deserializes the binary tree serialized using the
	 * serialize method above.
	 *
	 * @param {string} serialized Serialized string.
	 * @return {TreeNode} Root TreeNode of the deserialized tree.
	 */
	deserialize(serialized) {
		return this.deserializePreOrder(serialized.split(",").map(node => node === "*" ? null : new TreeNode(parseInt(node))));
	}

	deserializePreOrder(preOrderNodes) {
		const node = preOrderNodes.shift();
		if (node) {
		  node.left = this.deserializePreOrder(preOrderNodes);
		  node.right = this.deserializePreOrder(preOrderNodes);
		}
		return node;
	}

	/* Required to test the solution, do not modify */
	serde(root) {
		return this.deserialize(this.serialize(root));
	}
}

module.exports = Solution;