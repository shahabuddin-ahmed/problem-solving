class Solution {
	/**
	 * Inserts the provided interval in the provided
	 * list of sorted, non overlapping intervals.
	 *
	 * @param {Array<Array<number>>} intervals List of intervals.
	 * @param {Array<number>} insert New interval to insert.
	 * @return {Array<Array<number>>} Modified list of sorted, non overlapping intervals.
	 */
	insertInterval(intervals, insert) {
		const out = [];
		for (let i = 0; i < intervals.length; i++) {
			const interval = intervals[i];
			if (interval[1] < insert[0]) {
				out.push(interval);
			} else if (interval[0] > insert[1]) {
				out.push(insert);
				insert = interval;
			} else {
				const start = Math.min(insert[0], interval[0]);
				const end = Math.max(insert[1], interval[1]);
				insert = [start, end];
			}
		}
		out.push(insert);
		return out;
	}
}

module.exports = Solution;