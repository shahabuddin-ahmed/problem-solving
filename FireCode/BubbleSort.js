function bubbleSort(arr) {
    const length = arr.length;
	let temp = 0;
	for (let i=0; i < length-1; i++) {
		for (let j=i+1; j < length; j++) {
			if (arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

const result = bubbleSort([3, 5, 6, 4, 8, 2, 6]);