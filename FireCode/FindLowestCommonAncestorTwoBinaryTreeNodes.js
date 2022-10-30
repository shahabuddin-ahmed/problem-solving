class Solution {
	/**
	 * Returns the LCA of two nodes containing data n1
	 * and n2, in the tree for which the root is passed.
	 *
	 * @param {TreeNode} root Root of the binary tree.
	 * @param {number} n1 Data of the first target node.
	 * @param {number} n2 Data of the second target node.
	 * @return {number} Data of the LCA node.
	 */
	lca(root, n1, n2) {
	  const lcaData = [];
	  this.search(root, n1, n2, lcaData);
	  return lcaData[0];
	}
  
	search(node, n1, n2, lcaData) {
		if (node === null) {
			return;
		}

		const left = this.search(node.left, n1, n2, lcaData);
		const right = this.search(node.right, n1, n2, lcaData);
		const mid = node.data === n1 || node.data === n2;
		
		if ((left && right) || (left && mid) || (right && mid)) {
			lcaData[0] = node.data;
		}

		return left || right || mid;
	}
  }
  
  module.exports = Solution;