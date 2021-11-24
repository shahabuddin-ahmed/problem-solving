function binarySearch(arr, n) {
	let length = arr.length;
	let mid = length / 2;
	let leftIndex = 0;
	let rightIndex = length -1;
	while (arr[mid] !== n) {
		if (arr[mid] > n) {
			mid = Math.floor((mid - leftIndex) / 2);
		}
	}
}

const result = binarySearch([2,5,9],9);
console.log(result);