/**
 * @param {number[]} arr
 * @return {number}
 */

 function binarySearch(arr, left, right) {
	const mid = Math.floor((left + right) / 2);

	if (arr[mid] <= arr[mid+1] && arr[mid+1] > arr[mid+2]) {
		return mid+1;
	}

	if (arr[mid] < arr[mid+1]) {
		return binarySearch(arr, mid + 1, right);
	} else if (arr[mid] > arr[mid+1]) {
		return binarySearch(arr, left, mid - 1);
	}
}

var peakIndexInMountainArray = function(arr) {
    const right = arr.length - 1;
	return binarySearch(arr, 0, right);
};