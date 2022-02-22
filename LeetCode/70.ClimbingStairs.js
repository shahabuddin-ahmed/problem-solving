var climbStairs = function(n) {
	if(n <= 2) {
		return n;
	}

	let a = 1, b = 2, sum;

	for (let i = 3; i <= n; i++) {
		sum = a + b;
		a = b;
		b = sum;
	}
	return sum;
};

const result = climbStairs(45);
console.log(result);