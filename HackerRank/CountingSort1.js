function countingSort(arr) {
	const length = arr.length;
	const sortArr = [];
	let tempArr;
	let temp;

	for (let i=0; i < length; i++) {
		tempArr = [];
		for (let j=0; j < length-1; j++) {
			tempArr.push(0);
		}
		sortArr[i] = tempArr;
	}

	for (let i=0; i < length; i++) {
		for (let j=0; j < length-1; j++) {
			if (arr[i] > arr[j+1]) {
				sortArr[i][j] += 1;
				temp = arr[i];
				arr[i] = arr[j+1];
				arr[j+i] = temp;
			}
		}
	}

	console.log(sortArr);
	console.log(arr);
}

const result = countingSort([1, 3, 2, 2, 1]);
console.log(result);