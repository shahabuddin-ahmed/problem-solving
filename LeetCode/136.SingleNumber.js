function singleNumber(nums) {
    const map = new Map();
	let unique = 0;
	nums.forEach(value => {
		if (map.get(value)) {
			map.set(value, map.get(value) + 1);
		} else {
			map.set(value, 1);
		}
	});

	map.forEach((value, key) => {
		if (value === 1) {
			unique = key;
			return 0;
		}
	});
	return unique;
};

const result = singleNumber([]);
console.log(result);

// ✅ 1. Using a Set
var singleNumber = function(nums) {
    const numSet = new Set();

    for (let num of nums) {
        if (numSet.has(num)) {
            numSet.delete(num);
        } else {
            numSet.add(num);
        }
    }

	numSet

    // The only number left is the single number
    return [...numSet][0];
};

// ✅ Best Solution: XOR Trick (Bit Manipulation)
var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num; // XOR with current number
    }
    return result;
};

