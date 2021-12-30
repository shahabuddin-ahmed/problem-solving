// my solution
function bubbleSort(arr) {
    // Add your code here
	const length = arr.length;
	let temp = null;
	for (let i=0; i < length; i++) {
		for (let j=0; j < length; j++) {
			if (arr[j] > arr[j+1]) {
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	console.log(arr);
}

bubbleSort([4,2,6,8,-4]);
