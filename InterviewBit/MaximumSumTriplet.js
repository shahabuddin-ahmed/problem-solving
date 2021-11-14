function tripleSum(arr) {
	let tripleSum = 0;
	let index1 = 0;
	let index2 = 0;
	let x = 0;
	let y = 0;
	let z = 0;
	const len = arr.length;
	for (let i = 0; i < len-2; i++) {
		index1 = i + 1;
		while (index1 < len) {
			if (arr[i] < arr[index1]) {
				x = arr[i];
				y = arr[index1];
				index2 = index1 + 1;
				while (index2 < len) {
					if (arr[index1] < arr[index2]) {
						z = arr[index2];
						if ((x + y + z) > tripleSum) {
							tripleSum = x + y +z;
						}
					}
					index2++
				}
			}
			index1++;
		}
	}

	return tripleSum;
}


const result = tripleSum([2, 5, 3, 1, 4, 9]);
console.log(result);