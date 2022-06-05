/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

 function binarySearch(letters, target, left, right) {
	const mid = Math.floor((left + right) / 2);

	if (left >= right) {
		return letters[mid];
	}

	if (letters[mid] < target) {
		return binarySearch(letters, target, left + 1, right);
	} else if (letters[mid] > target) {
		return binarySearch(letters, target, left, right - 1);
	} else {
		return binarySearch(letters, target, left + 1, right);
	}
}

 var nextGreatestLetter = function(letters, target) {
    const right = letters.length - 1;

	if (letters[0] > target || letters[right] <= target) {
		return letters[0];
	}

	return binarySearch(letters, target, 0, right);
};