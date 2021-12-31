function replaceCsvDelimiter(csv, delimiter) {
    const length = csv.length;
	let newCSV = "";
	for (let i=0; i< length; i++) {
		if (csv.charAt(i) === ",") {
			newCSV += delimiter;
		} else {
			newCSV += csv.charAt(i);
		}
	}
	return newCSV;
}

const result = replaceCsvDelimiter("a,b,c", "_");
console.log(result);

// top solutions

// solutions one
// return csv.split("").map(c => c === "," ? delimiter : c).join("");