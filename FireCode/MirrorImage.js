function mirrorImage(image) {
    const rowLen = image.length;

	for (let i=0; i < rowLen; i++) {
		image[i].reverse();
	}
	return image;
}

const resut = mirrorImage([[255, 0, 0],[255, 0, 0]]);