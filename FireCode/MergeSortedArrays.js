function mergeSorted(arr1, arr2) {
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
	const sortArr = [];
	let i = 0, j = 0;

	while (true) {
		if ((arr1[i] < arr2[j])) {
			sortArr.push(arr1[i]);
			i++;
		} else if ((arr1[i] > arr2[j])) {
			sortArr.push(arr2[j]);
			j++;
		} else {
			if (i < arr1Len) {
				sortArr.push(arr1[i]);
				i++;
			} else if (j < arr2Len) {
				sortArr.push(arr2[j]);
				j++;
			} else {
				break;
			}
		}
	}

	return sortArr;
}

const result = mergeSorted([2,5,7,8,9],[9]);
console.log(result);