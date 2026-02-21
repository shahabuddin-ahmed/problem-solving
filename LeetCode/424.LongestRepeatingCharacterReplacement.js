/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let charCount = {};
    let maxFreq = 0;
    let maxLength = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        charCount[s[end]] = (charCount[s[end]] || 0) + 1;
        maxFreq = Math.max(maxFreq, charCount[s[end]]);
        if (end - start + 1 - maxFreq > k) {
            charCount[s[start]]--;
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};
