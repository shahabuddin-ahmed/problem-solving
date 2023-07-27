/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0,
        right = nums.length - 1;
    return findMinimum(nums, left, right);
};

function findMinimum(nums, left, right) {
    let mid = Math.floor((left + right) / 2);
    if (left >= right) {
        return nums[left];
    }

    if (nums[mid] < nums[right]) {
        right = mid;
        return findMinimum(nums, left, right);
    } else {
        left = mid + 1;
        return findMinimum(nums, left, right);
    }
}
