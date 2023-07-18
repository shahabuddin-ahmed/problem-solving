/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const len = nums.length;

    for (let j = 0; j < len; j++) {
        for (let i = 0; i < len - 1; i++) {
            if (nums[i] === 0 && nums[i + 1] !== 0) {
                nums[i] = nums[i + 1];
                nums[i + 1] = 0;
            }
        }
    }

    return nums;
};
