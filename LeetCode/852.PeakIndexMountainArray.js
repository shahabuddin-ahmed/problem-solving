/**
 * @param {number[]} arr
 * @return {number}
 */

 function binarySearch(arr, left, right) {
	const mid = Math.floor((left + right) / 2);

	if (left >= right) {
		return mid;
	}

	if (arr[mid] < arr[mid+1]) {
		return binarySearch(arr, left + 1, right);
	} else if (arr[mid] > arr[mid+1]) {
		return binarySearch(arr, left, right - 1);
	} else {
		return mid;
	}
}

var peakIndexInMountainArray = function(arr) {
    const right = arr.length - 1;
	return binarySearch(arr, 0, right);
};