function simplePow(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	if (exponent === 1) {
		return base;
	}
    return base * simplePow(base, exponent - 1);
}

const result = simplePow(-3, 3);
console.log(result);


// top solutions

// if (exponent === 0) return 1;
//     return base * this.simplePow(base, exponent - 1);