// This is sliding window pproblem

class Solution {
    /**
     * Returns the length of the maximum size substring
     * with all non repeated characters.
     *
     * @param {string} input Input string.
     * @return {number} Length of the longest substring with unique characters.
     */
    maxSubstringLength(input) {
        const charIndexMap = new Map();
        let start = 0,
            maxLength = 0;
        for (let i = 0; i < input.length; i++) {
            const c = input.charAt(i);
            if (charIndexMap.has(c) && charIndexMap.get(c) >= start) {
                start = charIndexMap.get(c) + 1;
            }
            maxLength = Math.max(maxLength, i - start + 1);
            charIndexMap.set(c, i);
        }
        return maxLength;
    }
}

module.exports = Solution;
