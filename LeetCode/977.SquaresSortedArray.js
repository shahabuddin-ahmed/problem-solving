function sortedSquares(nums) {
	return nums.map(value => value * value).sort((a, b) => a - b);
}

const result = sortedSquares([-4,-1,0,3,10]);
console.log(result);