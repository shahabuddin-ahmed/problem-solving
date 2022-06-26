class Solution {
	/**
	 * Returns the height of the binary tree.
	 *
	 * @param {TreeNode} root Root node of the binary tree.
	 * @return {number} Integer height of the tree.
	 */
	getHeight(root) {
		if (!root) {
			return;
		}
		
		return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
	}
}

module.exports = Solution;



// Another top solutions
class Solution {
	/**
	 * Returns the height of the binary tree.
	 *
	 * @param {TreeNode} root Root node of the binary tree.
	 * @return {number} Integer height of the tree.
	 */
	getHeight(root, h = 0) {
	  
	  if (root === null)
		return h;
		
	  return Math.max(h, this.getHeight(root.left, h + 1), this.getHeight(root.right, h + 1));
	  
	}
  }
  
  module.exports = Solution;