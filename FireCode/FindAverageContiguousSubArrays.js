function averages(arr, k) {
    let prevSum = 0, currentSum = 0, j = 1, l = 0;
	const average = [];
	const length = arr.length;
	for (let i=0; i< length; i++) {
		currentSum += arr[i];
		if (j == k) {
			average.push((currentSum - prevSum) / k);
			prevSum += arr[l++];
			j--;
		}
		j++;
	}
	return average;
}

const result = averages([1, 3, -2, 6, 4], 5);
console.log(result);