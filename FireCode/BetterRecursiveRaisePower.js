function betterPow(base, exponent) {
    if (exponent > 0) {
		return pow(base, exponent);
  	} else {
  		return 1 / pow(base, - exponent);
  	}
}
  
function pow(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	return base * pow(base, exponent - 1);
}

const result = betterPow(2, -2);
console.log(result);