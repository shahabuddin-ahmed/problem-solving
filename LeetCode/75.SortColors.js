/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    const swap = (i, j) => {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    };

    while (mid <= high) {
        if (nums[mid] === 0) {
            swap(low, mid);
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            swap(mid, high);
            high--;
        }
    }
};