function search(nums, target, left, right) {

	let mid = Math.ceil((left + right) / 2);

	if (left > right) {
		return -1;
	} else if (nums[mid] > target) {
		right = mid - 1;
		return search(nums, target, left, right);
	} else if (nums[mid] < target) {
		left = mid + 1;
		return search(nums, target, left, right);
	} else {
		return mid;
	}
}

function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;

	return search(nums, target, left, right);
};

const result = binarySearch([1, 2, 3, 4, 5, 6], 5);
console.log(result);