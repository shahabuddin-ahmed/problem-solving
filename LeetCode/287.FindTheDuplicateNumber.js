/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const map = new Map();
    for (const value of nums) {
        if (!map.get(value)) {
            map.set(value, value);
        } else {
            return value;
        }
    }
};

const result = findDuplicate([1, 2, 3, 4, 4]);
console.log(result);
