class Solution {
    constructor() {
        /* Digits to letters map */
        this.KeyMap = new Map([
            ["2", "abc"],
            ["3", "def"],
            ["4", "ghi"],
            ["5", "jkl"],
            ["6", "mno"],
            ["7", "pqrs"],
            ["8", "tuv"],
            ["9", "wxyz"],
        ]);
    }

    /**
     * Generates and returns all possible T9 string
     * from the input string of digit presses.
     *
     * @param {string} digits String containing digits pressed.
     * @return {Set<string>} Set of all possible T9 strings.
     */
    genT9Strings(digits) {
        const out = new Set();
        this.dfsGenerate(digits, 0, "", out);
        return out;
    }

    /**
     * Dfs helper.
     *
     * @param {string} digits Original digits string.
     * @param {number} index Current index of digit string under consideration.
     * @param {string} stringSoFar Partial string so far in the chain.
     * @param {Set<string>} out Output set.
     */
    dfsGenerate(digits, index, stringSoFar, out) {
        if (index === digits.length) {
            out.add(stringSoFar);
        } else {
            const digit = digits.charAt(index);
            const lettersForDigit = this.KeyMap.get(digit);
            for (let i = 0; i < lettersForDigit.length; i++) {
                this.dfsGenerate(
                    digits,
                    index + 1,
                    stringSoFar + lettersForDigit.charAt(i),
                    out
                );
            }
        }
    }
}

module.exports = Solution;
