function findNumbers(nums) {
	return nums.reduce((prev, curr) => (String(curr).length % 2 === 0 ? prev += 1 : prev), 0);
}

const result = findNumbers([12,345,2,6,7896]);
console.log(result);