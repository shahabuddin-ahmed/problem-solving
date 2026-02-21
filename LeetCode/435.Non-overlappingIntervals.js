/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    if (!intervals.length) {
        return 0;
    }

    const len = intervals.length;
    intervals.sort((a, b) => a[1] - b[1]);

    let endTime = intervals[0][1],
        counter = 1;

    for (let i = 1; i < len; i++) {
        if (intervals[i][0] >= endTime) {
            counter++;
            endTime = intervals[i][1];
        }
    }

    return len - counter;
};
