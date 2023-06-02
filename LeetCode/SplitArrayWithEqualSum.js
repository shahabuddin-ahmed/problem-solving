class Solution {
    /**
     * Tests if the array can be split into two
     * with equal sum.
     *
     * @param {Array<number>} input Input array.
     * @return {boolean} True if such a split is possible, false otherwise.
     */
    evenSplit(input) {
        const sum = input.reduce((n1, n2) => n1 + n2, 0);
        if (sum % 2 !== 0) {
            return false;
        }
        return this.search(input, 0, sum / 2);
    }

    search(input, index, target) {
        if (index === input.length) {
            return target === 0;
        } else if (target === 0) {
            return true;
        } else {
            return (
                this.search(input, index + 1, target - input[index]) ||
                this.search(input, index + 1, target)
            );
        }
    }
}

module.exports = Solution;

// top solutions
// class Solution {
//     /**
//      * Tests if the array can be split into two
//      * with equal sum.
//      *
//      * @param {Array<number>} input Input array.
//      * @return {boolean} True if such a split is possible, false otherwise.
//      */
//     evenSplit(input) {
//         let sum = input.reduce((a, b) => a + b, 0);
//         if (sum % 2 !== 0) {
//             return false;
//         }
//         if (sum === 0) {
//             return true;
//         }
//         for (let i = 0; i < input.length; i++) {
//             return this.dfs(sum / 2, input[i]);
//         }
//         return false;
//     }
//     dfs(target, c) {
//         if (target === 0) {
//             return true;
//         } else if (target < 0) {
//             return false;
//         }
//         return this.dfs(target - c, c);
//     }
// }

// module.exports = Solution;

// class Solution {
//     /**
//      * Tests if the array can be split into two
//      * with equal sum.
//      *
//      * @param {Array<number>} input Input array.
//      * @return {boolean} True if such a split is possible, false otherwise.
//      */
//     evenSplit(input) {
//         let sum = input.reduce((a, b) => a + b, 0);
//         if (sum % 2 !== 0) {
//             return false;
//         }
//         if (sum === 0) {
//             return true;
//         }
//         for (let i = 0; i < input.length; i++) {
//             return this.dfs(sum / 2, input[i]);
//         }
//         return false;
//     }
//     dfs(target, c) {
//         if (target === 0) {
//             return true;
//         } else if (target < 0) {
//             return false;
//         }
//         return this.dfs(target - c, c);
//     }
// }

// module.exports = Solution;
