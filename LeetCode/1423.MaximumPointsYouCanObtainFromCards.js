/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    const total = cardPoints.reduce((sum, card) => sum + card, 0);
    if (k === cardPoints.length) {
        return total;
    }

    let state = 0;
    let maxPoints = 0;
    let start = 0;

    for (let end = 0; end < cardPoints.length; end++) {
        state += cardPoints[end];
        if (end - start + 1 === cardPoints.length - k) {
            maxPoints = Math.max(total - state, maxPoints);
            state -= cardPoints[start];
            start++;
        }
    }
    return maxPoints;
};
