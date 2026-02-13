function findDisappearedNumbers(nums) {
    const map = new Map();
	let max = nums.length;
	let counter = 0;
	const arr = [];

	nums.forEach(value => {
		map.set(value, value);
	});

	while (counter++ < max) {
		if (!map.get(counter)) {
			arr.push(counter);
		}
	}
	return arr;
};

const result = findDisappearedNumbers([1, 1]);
console.log(result);

// Solution: In-Place Marking Using Negation
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        nums[index] = -Math.abs(nums[index]);
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};

var findDisappearedNumbers = function(nums) {
    const numSet = new Set(nums);
    const result = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }

    return result;
};

