// my first solution
function binarySearch(arr, n) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;
	let mid = Math.floor(rightIndex / 2);
	
	while (leftIndex <= rightIndex) {
		if (arr[mid] > n) {
			rightIndex = mid - 1;
			if (arr[mid] === n || arr[leftIndex] === n || arr[rightIndex] === n) {
				return true;
			}
		} else {
			leftIndex = mid + 1;
			if (arr[mid] === n || arr[leftIndex] === n || arr[rightIndex] === n) {
				return true;
			}
		}
		mid = Math.floor(mid / 2);
		if (mid > 0) {
			break;
		}
	}
	return false;
}

const result = binarySearch([2,5,9],9);
console.log(result);


// binary search second solution without recursion
function binarySearch(arr, n) {
	let left = 0, right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);

	while (left <= right) {
		if (arr[mid] > n) {
			right = mid - 1;
		} else if (arr[mid] < n) {
			left = mid + 1;
		} else {
			return true;
		}
		mid = Math.floor((left + right) / 2);
	}
	return false;
}