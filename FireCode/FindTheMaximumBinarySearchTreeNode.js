class Solution {
	/**
	 * Returns the maximum data value present in the passed
	 * binary search tree.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary search tree.
	 * @return {number} Maximum integer data value in the tree.
	 */
	maxData(root) {
	  if (!root.right) {
		return root.data;
	  }
	  
	  return this.maxData(root.right);
	}
  }
  
  module.exports = Solution;


// top solutions

class Solution {
	/**
	 * Returns the maximum data value present in the passed
	 * binary search tree.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary search tree.
	 * @return {number} Maximum integer data value in the tree.
	 */
	maxData(root) {
	  if (root == null) {
		return null
	  }
	  let currentNode = root
	  while (currentNode.right != null) {
		currentNode = currentNode.right
	  }
	  return currentNode.data
	}
  }
  
  module.exports = Solution


