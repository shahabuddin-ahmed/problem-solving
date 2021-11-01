const A = [0, 1, 1], B = [0, 1, 2];
function coverPoints(A, B) {
	let minMove = 0;
	const x = A[0];
	const y = B[0];
	let newX;
	let newY;
	
	for (let i = 1; i < A.length; i++) {
		newX = A[i];
		newY = B[i];
		max = Math.max(Math.abs(newX - x), Math.abs(newY - y));
		minMove += max;
		x = newX;
		y = newY;
	}
	return minMove;
}

const result = coverPoints(A, B);
console.log(result);