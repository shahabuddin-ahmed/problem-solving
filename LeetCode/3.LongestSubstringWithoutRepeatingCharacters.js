/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const state = {};
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        if (s[end] in state) {
            start = Math.max(start, state[s[end]] + 1);
        }

        state[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};