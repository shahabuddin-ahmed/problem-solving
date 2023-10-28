class Solution {
    /**
     * Returns the missing number in a 1 to 10 sequence
     *
     * @param {Array<number>} arr Input array
     * @return {number} Missing integer
     */
    missingNumber(arr) {
        const actualSum = (10 * (10 + 1)) / 2;
        const sum = arr.reduce((preV, currV) => preV + currV);
        return actualSum - sum;
    }
}

module.exports = Solution;

// Another top solutions
// class Solution {
//     /**
//      * Returns the missing number in a 1 to 10 sequence
//      *
//      * @param {Array<number>} arr Input array
//      * @return {number} Missing integer
//      */
//     missingNumber(arr) {
//       const seen = new Set(arr);

//       for (let i = 1; i <= 10; i++) {
//         if (!seen.has(i)) {
//           return i;
//         }
//       }
//     }
//   }

//   module.exports = Solution;
