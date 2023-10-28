/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const map = new Map(),
        duplicates = [];
    for (const value of nums) {
        if (!map.get(value)) {
            map.set(value, value);
        } else {
            duplicates.push(value);
        }
    }
    return duplicates;
};

const result = findDuplicate([1, 2, 3, 4, 4, 3]);
console.log(result);
