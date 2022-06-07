class Solution {
	/**
	 * Returns the minimum data value present in the passed
	 * binary search tree.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary search tree.
	 * @return {number} Minimum integer data value in the tree.
	 */
	minData(root) {
		if (!root.left) {
			return root.data;
		}

		return this.minData(root.left);
	}
  }
  
  module.exports = Solution;



// top solutions

// class Solution {
// 	/**
// 	 * Returns the minimum data value present in the passed
// 	 * binary search tree.
// 	 *
// 	 * @param {TreeNode} root Root TreeNode of the binary search tree.
// 	 * @return {number} Minimum integer data value in the tree.
// 	 */
// 	minData(root) {
// 	  if (root == null) {
// 		return null
// 	  }
// 	  let currentNode = root
// 	  while (currentNode.left != null) {
// 		currentNode = currentNode.left
// 	  }
// 	  return currentNode.data
// 	}
//   }
  
//   module.exports = Solution
  