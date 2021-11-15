function maxSubArray(A) {
	const len = A.length;
	let fastIndex = 0;
	let lastIndex = 0;
	let preValue = 0;
	let currValue = 0;
	let maxValue = -50;

	for (let i = 0; i < len; i++) {
		preValue = 0;
		for (let j = i; j < len; j++) {
			currValue = preValue + A[j];
			if (currValue > preValue) {
				lastIndex = j;
			}

			preValue = currValue;
		}
		
		if (currValue > maxValue) {
			fastIndex = i;
			maxValue = preValue;
		}
	}

	console.log(fastIndex, lastIndex);
}

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);