/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    return findFeak(nums, 0, nums.length - 1);
};

function findFeak(nums, left, right) {
    const mid = Math.floor((left + right) / 2);

    if (left >= right) {
        return mid;
    }

    if (nums[mid] > nums[mid + 1]) {
        right = mid;
        return findFeak(nums, left, right);
    } else {
        left = mid + 1;
        return findFeak(nums, left, right);
    }
}

const result = findPeakElement([1, 2, 3, 1]);
console.log(result);
