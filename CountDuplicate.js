function countDuplicate(numbers) {
	const countMap = new Map();
	const uniqeMap = new Map();

	numbers.forEach(number => {
		if (countMap.get(number)) {
			uniqeMap.set(number, number);
		}
		countMap.set(number, number);
	})
	
	return uniqeMap.size;
}

const result = countDuplicate([1, 3, 1, 4, 1, 5, 6, 3, 2]);
console.log(result);