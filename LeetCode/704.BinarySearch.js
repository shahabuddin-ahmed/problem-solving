/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 function binarySearch(nums, target, left, right) {

	let mid = Math.ceil((left + right) / 2);

	if (left > right) {
		return -1;
	} else if (nums[mid] > target) {
		right = mid - 1;
		return binarySearch(nums, target, left, right);
	} else if (nums[mid] < target) {
		left = mid + 1;
		return binarySearch(nums, target, left, right);
	} else {
		return mid;
	}
}

var search = function(nums, target) {
    let left = 0, right = nums.length - 1;

	return binarySearch(nums, target, left, right);
};