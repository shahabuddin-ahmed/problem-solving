function reverse(input) {
	const sign = input >= 0 ? 1 : -1;
	input *= sign;
	let rev = 0;
	while (input) {
		rev = rev * 10 + input % 10;
		input = Math.floor(input / 10);
	}

	return rev * sign;
}

const result = reverse(123);
console.log(result);