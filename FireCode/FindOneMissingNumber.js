function missingNumber(arr) {
	const length = arr.length;
    const sum = arr.reduce((prev, curr) => prev + curr);
	return (((length + 1) * (length + 2)) / 2) - sum;
}

const result = missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10]);
console.log(result);