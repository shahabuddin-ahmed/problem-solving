class Solution {
    /**
     * Returns true if the word is present in the
     * Boggle board, false otherwise.
     *
     * @param {Array<Array<string>>} board Boggle board.
     * @param {string} word Target word.
     * @return {boolean} True if the word is found, else false.
     */
    findWord(board, word) {
        const visited = [...Array(board.length)].map((_) =>
            Array(board[0].length)
        );
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                if (this.search(board, word, "", visited, r, c)) return true;
            }
        }
        return false;
    }

    /**
     * Dfs helper method.
     */
    search(board, word, partial, visited, r, c) {
        if (
            !this.isWithinBounds(r, c, board) ||
            visited[r][c] ||
            partial.length > word.length ||
            (partial.length > 0 &&
                partial[partial.length - 1] !== word[partial.length - 1])
        )
            return false;
        else {
            visited[r][c] = true;
            partial += board[r][c];
            if (partial === word) return true;
            const found = this.allowedCoordinates(r, c).some((rc) =>
                this.search(board, word, partial, visited, rc[0], rc[1])
            );
            visited[r][c] = false;
            return found;
        }
    }

    /**
     * Returns true if the passed row and column are within bounds
     * of the passed board array.
     */
    isWithinBounds(r, c, board) {
        return (
            r >= 0 &&
            r <= board.length - 1 &&
            c >= 0 &&
            c <= board[0].length - 1
        );
    }

    /**
     * Utility method to return the coordinate row and column values
     * allowed, given the current row and column indices.
     */
    allowedCoordinates(r, c) {
        return [
            [r - 1, c],
            [r + 1, c],
            [r, c - 1],
            [r, c + 1],
        ];
    }
}

module.exports = Solution;

/**
 * Another top solutions
 *
 */

// class Solution {
//     /**
//      * Returns true if the word is present in the
//      * Boggle board, false otherwise.
//      *
//      * @param {Array<Array<string>>} board Boggle board.
//      * @param {string} word Target word.
//      * @return {boolean} True if the word is found, else false.
//      */
//     findWord(board, word) {
//         for (let r = 0; r < board.length; r++) {
//             for (let c = 0; c < board[0].length; c++) {
//                 if (this.dfs(board, word, r, c, 0)) return true;
//             }
//         }
//         return false;
//     }
//     dfs(board, word, r, c, idx) {
//         if (idx === word.length) return true;
//         if (
//             r < 0 ||
//             c < 0 ||
//             r >= board.length ||
//             c >= board[0].length ||
//             board[r][c] === 0 ||
//             board[r][c] !== word[idx]
//         ) {
//             return false;
//         }
//         board[r][c] = 0;
//         return (
//             this.dfs(board, word, r + 1, c, idx + 1) ||
//             this.dfs(board, word, r - 1, c, idx + 1) ||
//             this.dfs(board, word, r, c + 1, idx + 1) ||
//             this.dfs(board, word, r, c - 1, idx + 1)
//         );
//     }
// }

// module.exports = Solution;
