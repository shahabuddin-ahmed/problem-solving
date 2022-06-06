/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

 function binarySearch(letters, target, left, right) {
	const mid = Math.floor((left + right) / 2);

	if (letters[mid] <= target && letters[mid+1] > target) {
		return letters[mid+1];
	}

	if (letters[mid] <= target) {
		return binarySearch(letters, target, mid + 1, right);
	} else if (letters[mid] > target) {
		return binarySearch(letters, target, left, mid - 1);
	}
}

 var nextGreatestLetter = function(letters, target) {
    const right = letters.length - 1;

	if (letters[0] > target || letters[right] <= target) {
		return letters[0];
	}

	return binarySearch(letters, target, 0, right);
};