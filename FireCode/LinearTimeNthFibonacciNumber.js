class Solution {
	/**
	 * Returns the nth Fibonacci number in linear time and
	 * with constant space.
	 *
	 * @param {number} n Which number to return in the sequence.
	 * @return {number} Nth Fibonacci number.
	 */
	betterFibonacci(n) {
		let a = 0, b = 1, c, i;
		if (n === 0) {
			return a;
		}
		
		for (i = 2; i <= n; i++) {
			c = a + b;
			a = b;
			b = c;
		}
		return b;
	}
}
  
module.exports = Solution;