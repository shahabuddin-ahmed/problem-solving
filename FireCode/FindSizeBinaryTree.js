class Solution {
	/**
	 * Returns the size of the binary tree.
	 *
	 * @param {TreeNode} root Root TreeNode.
	 * @return Integer size of the binary tree.
	 */

	counter = 0;
	
	size(root) {
		if (!root) {
			return this.counter;
		}
	
		this.size(root.left);
		this.size(root.right);
		return ++this.counter;
	}
}

module.exports = Solution;



// Top Solutions
class Solution {
	/**
	 * Returns the size of the binary tree.
	 *
	 * @param {TreeNode} root Root TreeNode.
	 * @return Integer size of the binary tree.
	 */
	size(root) {
	  if (root === null) {
		return 0;
	  }
	  return 1 + this.size(root.left) + this.size(root.right);
	}
  }
  
  module.exports = Solution;