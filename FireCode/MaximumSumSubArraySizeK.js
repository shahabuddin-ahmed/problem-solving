function maxSum(arr, k) {
    let prevSum = 0, currentSum = 0, maxSum = 0, j = 1, l = 0;
	const length = arr.length;
	for (let i=0; i< length; i++) {
		currentSum += arr[i];
		if (j == k) {
			if ((currentSum - prevSum) > maxSum) {
				maxSum = currentSum - prevSum;
			};
			prevSum += arr[l++];
			j--;
		}
		j++;
	}
	return maxSum;
}

const result = maxSum([2, 1, 5, 1, 3], 3);
console.log(result);



// top solutions

/**
 * maxSum(arr, k) {
    let windowSum = 0, maxSum = 0;
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
      windowSum += arr[right];
      if (right - left + 1 === k) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[left++];
      }
    }
    return maxSum;
  }
 */