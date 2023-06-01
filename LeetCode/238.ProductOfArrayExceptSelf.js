/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    return nums.map((n, index) => {
        let sum = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i !== index) {
                sum *= nums[i];
            }
        }
        return sum;
    });
};

const result = productExceptSelf([1, 2, 3, 4]);
console.log(result);
