class Solution {
	/**
	 * Checks whether or not a subset of items in the
	 * input array can sum to the target integer.
	 *
	 * @param {Array<number>} arr Input positive integers.
	 * @param {number} target Target integer.
	 * @return {boolean} True if there exists a subset where the sum of its
	 * elements equals the target.
	 */
	subsetSum(arr, target) {
		return this.search(0, arr, target);
	}

	search(index, arr, target) {
		if (target === 0) {
			return true;
		} else if (index === arr.length) {
			return false;
		} else {
			return this.search(index + 1, arr, target - arr[index]) || this.search(index + 1, arr, target);
		}
	}
}
  
module.exports = Solution;