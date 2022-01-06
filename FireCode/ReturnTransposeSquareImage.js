function transpose(image) {
	const length = image.length;
	let temp = 0;
	for (let i = 0; i < length; i++) {
		for (let j = i; j < length; j++) {
			if (i !== j) {
				temp = image[i][j];
				image[i][j] = image[j][i];
				image[j][i] = temp;
			}
		}
	}
	return image;
}

const result = transpose([[1, 2, 3, 4],[5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
console.log(result);