class Solution {
	/**
	 * Takes in an integer array and a target number and returns
	 * an integer array containing indices of numbers that add up to
	 * the target number.
	 *
	 * @param {Array<number>} arr Integer array.
	 * @param {number} target Integer target.
	 * @return {Array<number>} Indices of arr numbers which add up to the target number.
	 */
	twoSum(arr, target) {
		for(let i = 0; i < arr.length; i++) {
			for(let j = i + 1; j < arr.length; j++) {
				if(arr[i] + arr[j] == target) {
					return [i, j];
				}
			}
		}
		return [];
	}
}

module.exports = Solution;


// Top Solutions

class Solution {
	/**
	 * Takes in an integer array and a target number and returns
	 * an integer array containing indices of numbers that add up to
	 * the target number.
	 *
	 * @param {Array<number>} arr Integer array.
	 * @param {number} target Integer target.
	 * @return {Array<number>} Indices of arr numbers which add up to the target number.
	 */
	twoSum(arr, target) {
	  const map = new Map();
	  for (let i = 0; i < arr.length; i++) {
		const n = arr[i];
		if (map.has(n)) {
		  return [map.get(n), i];
		} else {
		  map.set(target - n, i);
		}
	  }
  
	  return [];
	}
  }
  
  module.exports = Solution;