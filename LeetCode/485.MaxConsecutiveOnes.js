function findMaxConsecutiveOnes(nums) {
	let count = 0, max = 0;
	nums.forEach(value => {
		if (value === 1) {
			count++;
		} else {
			if (count > max) {
				max = count;
				count = 0;
			}
		}
	});

	if (count > max) {
		max = count;
	}
	return max;
}

const result = findMaxConsecutiveOnes([1,0,1,1,0,0,1]);
console.log(result);