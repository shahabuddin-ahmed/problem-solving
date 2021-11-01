function minLightCount(A, B) {
	const len = A.length;
	let count = 0, bulbFound;
	let i = 0;

	while(i < len) {
		let j = Math.min(len - 1, i + B - 1);
		bulbFound = false;
		
		while((j >= (i - B + 1)) && (j >= 0) && (j <= len)){
			if(A[j] === 1) {
				bulbFound = true;
				count++;
				i = j + B;
				break;
			}
			j--;
		}

		if(!bulbFound) {
			return -1;
		}
	}
	return count;
}