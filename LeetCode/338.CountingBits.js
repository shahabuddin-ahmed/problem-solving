/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
	const arr = [];
	for (let i=0; i < n; i++) {
		const strBinary = parseInt(i).toString(2);
		const strLen = strBinary.length;
		let counter = 0;

		for (let j=0; j < strLen; j++) {
			if (strBinary.charAt(j) === "1") {
				counter++;
			}
		}
		arr.push(counter);
	}
    return arr;
};

const result = countBits(12);
console.log(result);