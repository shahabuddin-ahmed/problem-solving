function mutateDnaPairs(sequence) {
    let newSrt = "";
	const length = sequence.length;

	for (let i = 0; i < length; i++) {
		if (sequence[i] === "A" && sequence[i+1] === "A") {
			newSrt += sequence[i] + "G";
		} else if (sequence[i] === "C" && sequence[i+1] === "C") {
			newSrt += sequence[i] + "G";
		} else if (sequence[i] === "G" && sequence[i+1] === "G") {
			newSrt += sequence[i] + "G";
		} else if (sequence[i] === "T" && sequence[i+1] === "T") {
			newSrt += sequence[i] + "G";
		} else {
			newSrt += sequence[i];
		}
	}

	return newSrt;
}

const result = mutateDnaPairs("GGG");
console.log(result);