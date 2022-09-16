const ListNode = require("./ListNode");

class Solution {
	/**
	 * Performs a bottom up level order traversal and returns
	 * a list of the nodes' data visited in order.
	 *
	 * @param {TreeNode} root Root TreeNode of the binary tree.
	 * @return {Array<number>} Integer list containing data of the nodes visited in order.
	 */
	bottomUpLevelOrder(root) {
		const arrMap = [];
		const finalArr = [];
		this.countLevel(root, arrMap, 0);
		const len = arrMap.length;

		for (let i = len - 1; i >= 0; i--) {
			finalArr.push(...arrMap[i]);
		}
		
		return finalArr;
	}

	countLevel(root, arrMap, levelCount) {
		if (!root) {
			return;
		}

		if (arrMap[levelCount]) {
			arrMap[levelCount].push(root.data);
		} else {
			arrMap[levelCount] = [root.data];
		}

		levelCount++;

		this.countLevel(root.left, arrMap, levelCount);
		this.countLevel(root.right, arrMap, levelCount);
	}
}

module.exports = Solution;