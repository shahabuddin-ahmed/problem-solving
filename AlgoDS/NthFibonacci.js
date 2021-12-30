// my solution with loop
let n0 = 0;
let n = 7;
let n1 = 1;
let sum = 0;

for (let i=0; i< n; i++) {
	if (i === 0) {
		sum = n0;
	} else {
		sum = n0 + n1;
		n0 = n1;
		n1 = sum;
	}

	console.log(sum);
}


// with recursion that is not my own solutions
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

const result = fibonacci(7);
console.log(result);


// this is my solution with recursion
function nThFibonacci(n) {
	const n0 = 0;
	const n1 = 1;
	const sum = 0;
	const result = generateFibonacci(n, n0, n1, sum);
	console.log("result =>", result);
}

function generateFibonacci(n, n0, n1, sum) {
	console.log(sum);
	if (n < 1) {
		return n;
	}
	sum = n0 + n1;
	n0 = n1;
	n1 = sum;
	if (n < 3) {
		return sum;
	}

	return generateFibonacci(--n, n0, n1, sum);
}