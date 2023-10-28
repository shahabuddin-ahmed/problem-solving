/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, left, right) {
    let mid = Math.floor((left + right) / 2);

    if (left > right) {
        return false;
    }

    if (nums[mid] === target) {
        return true;
    }

    while (nums[left] === nums[mid]) {
        left++;
        mid = Math.floor((left + right) / 2);

        if (left > right) {
            return false;
        }

        if (nums[mid] === target) {
            return true;
        }
    }

    if (nums[left] <= nums[mid]) {
        if (nums[left] <= target && target <= nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        return binarySearch(nums, target, left, right);
    } else {
        if (nums[mid] <= target && target <= nums[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        return binarySearch(nums, target, left, right);
    }
}

const result = search(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    2
);
console.log(result);
