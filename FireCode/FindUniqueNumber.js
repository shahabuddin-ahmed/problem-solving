function uniqueNumber(arr) {
	let unique = null;
	const map = new Map();
	arr.forEach(value => {
		if (map.get(value)) {
			map.set(value, map.get(value) + 1);
		} else {
			map.set(value, 1);
		}
	});

	map.forEach((value, key) => {
		if (value === 1) {
			unique = key;
		}
	});
	return unique;
}

const result = uniqueNumber([1,1,2,2,3,4,4,5,5]);
console.log(result);