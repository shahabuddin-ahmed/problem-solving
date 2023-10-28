class Solution {
    /**
     * Returns the minimum sum along a path from the top
     * of the triangle to the bottom along adjacent nodes.
     *
     * @param {Array<Array<number>>} triangle Triangle as a nested list.
     * @return {number} Minimum sum.
     */
    minPathSum(triangle) {
        const numLevels = triangle.length;
        const memo = [...triangle[numLevels - 1]];
        for (let level = numLevels - 2; level >= 0; level--) {
            for (let i = 0; i <= level; i++) {
                memo[i] = triangle[level][i] + Math.min(memo[i], memo[i + 1]);
            }
        }
        return memo[0];
    }
}

module.exports = Solution;
