function findMedian(arr) {
	arr.sort((a, b) => a - b);
	return arr[Math.floor((arr.length / 2)) + 1];
}

const result = findMedian([1, 1, 3, 2, 1, 4]);
console.log(result);