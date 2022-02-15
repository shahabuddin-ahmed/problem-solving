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