/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, left, right) {
    const mid = Math.floor((left + right) / 2);
    if (left > right) {
        return -1;
    }

    if (nums[mid] === target) {
        return mid;
    }

    if (nums[left] <= nums[mid]) {
        if (nums[left] <= target && target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        return binarySearch(nums, target, left, right);
    } else {
        if (nums[mid] < target && target <= nums[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        return binarySearch(nums, target, left, right);
    }
}

const result = search([5, 1, 2, 3, 4], 1);
console.log(result);
