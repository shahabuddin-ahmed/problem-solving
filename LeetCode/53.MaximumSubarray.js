function maxSubArray(nums) {
    let sum = 0, maxSum = -Infinity, isNeg = true, isPos = true;
	const length = nums.length;

	for (let i = 0; i < length; i++) {
		if (nums[i] <= sum + nums[i]) {
			sum += nums[i];
		} else {
			sum = nums[i];
		}

		if (sum > maxSum) {
			maxSum = sum;
		}
	}

	return maxSum;
};

const result = maxSubArray([1, -2, 0]);
console.log(result);