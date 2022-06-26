class Solution {
	/**
	 * Returns a list of integers depicting the data
	 * of the nodes of the input tree, traversed with
	 * pre-order iterative traversal.
	 *
	 * @param {TreeNode} root Root node of the binary tree.
	 * @return {Array<number>} List of node data.
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



// Top Solutions

class Solution {
	/**
	 * Returns a list of integers depicting the data
	 * of the nodes of the input tree, traversed with
	 * pre-order iterative traversal.
	 *
	 * @param {TreeNode} root Root node of the binary tree.
	 * @return {Array<number>} List of node data.
	 */
	preOrder(root) {
	  const out = [];
	  if (root === null) return out;
	  const stack = [];
	  stack.push(root);
	  while (stack.length > 0) {
		const node = stack.pop();
		out.push(node.data);
		if (node.right !== null) stack.push(node.right);
		if (node.left !== null) stack.push(node.left);
	  }
	  return out;
	}
  }
  
  module.exports = Solution;