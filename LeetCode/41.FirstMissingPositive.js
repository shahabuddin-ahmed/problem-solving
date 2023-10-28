/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let map = new Map();
    nums.forEach((value) => {
        map.set(value, 1);
    });

    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) return i;
    }

    return nums.length + 1;
};

const result = firstMissingPositive([1, 1]);
console.log(result);
