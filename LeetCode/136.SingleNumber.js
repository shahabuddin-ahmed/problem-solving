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