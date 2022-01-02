function findDuplicateNumbers(arr) {
    const newMap = new Map();
	const dupArr = [];

	arr.forEach(value => {
		if (newMap.get(value)) {
			if (newMap.get(value, 1) === 1) {
				dupArr.push(value);
			}
			newMap.set(value, newMap.get(value) + 1);
		} else {
			newMap.set(value, 1);
		}
	});

	return dupArr;
}


const result = findDuplicateNumbers([4,3,1,4,2,1,4]);
console.log(result);