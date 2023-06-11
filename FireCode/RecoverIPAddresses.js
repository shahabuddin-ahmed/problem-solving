class Solution {
    /**
     * Returns all valid IPv4 addresses that can be generated
     * from the input string.
     *
     * @param {string} input Input string.
     * @return {Set<string>} Set of valid IPv4 addresses.
     */
    genIpAddresses(input) {
        const out = new Set();
        this.depthFirstBuild(input, "", 0, 3, out);
        return out;
    }

    /**
     * Depth first builder helper.
     * @param {string} input
     * @param {string} stringSoFar
     * @param {number} index
     * @param {number} dotsRemaining
     * @param {Set<string>} out
     */
    depthFirstBuild(input, stringSoFar, index, dotsRemaining, out) {
        if (index > input.length || dotsRemaining < 0) {
            return;
        } else if (dotsRemaining === 0 && index === input.length) {
            out.add(stringSoFar);
        } else {
            [1, 2, 3]
                .filter((i) => i + index <= input.length)
                .map((endIndex) => input.substring(index, index + endIndex))
                .filter(this.isValidByte)
                .forEach((s) =>
                    this.depthFirstBuild(
                        input,
                        stringSoFar.length === 0
                            ? s
                            : [stringSoFar, s].join("."),
                        index + s.length,
                        stringSoFar.length === 0
                            ? dotsRemaining
                            : dotsRemaining - 1,
                        out
                    )
                );
        }
    }

    /**
     * Returns true if an input substring is a valid byte.
     * @param {string} candidate Candidate substring.
     * @return {boolean} True if this is a valid byte.
     */
    isValidByte(candidate) {
        const intValue = parseInt(candidate);
        return (
            !(candidate.length > 1 && candidate.charAt(0) === "0") &&
            intValue >= 0 &&
            intValue <= 255
        );
    }
}

module.exports = Solution;
