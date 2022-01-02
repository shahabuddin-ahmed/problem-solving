function flipImage(image) {
    const rowLen = image.length;
	const flipImage = [];

	for (let i=rowLen - 1; i >= 0; i--) {
		flipImage.push(image[i]);
	}
	return flipImage;
}

const result = flipImage([[255,0,0],[0,0,255]]);
console.log(result);


//top solutions one
// return image.map((row, i) => image[image.length - 1 - i]);