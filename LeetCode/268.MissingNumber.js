function missingNumber(nums) {
    const length = nums.length;
	const actualSum = (length * (length + 1)) / 2;
	return actualSum - nums.reduce((prev, curr) => prev + curr);
};

const result = missingNumber([9,6,4,2,3,5,7,0,1]);
console.log(result);