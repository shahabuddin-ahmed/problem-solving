/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const nums = rowSearch(
        matrix,
        target,
        0,
        matrix.length - 1,
        matrix[0].length - 1
    );
    return columnSearch(nums, target, 0, nums.length - 1);
};

function columnSearch(nums, target, left, right) {
    if (!nums.length || left > right) {
        return false;
    }
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
        return true;
    }

    while (nums[left] === nums[mid]) {
        left++;
        mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        if (!nums.length || left > right) {
            return false;
        }
    }

    if (nums[mid] > target) {
        right = mid - 1;
        return columnSearch(nums, target, left, right);
    } else if (nums[mid] < target) {
        left = mid + 1;
        return columnSearch(nums, target, left, right);
    }
}

function rowSearch(matrix, target, rTop, rBottom, cRight) {
    const mid = Math.floor((rTop + rBottom) / 2);
    const row = matrix[mid];

    if (rTop > rBottom) {
        return [];
    }

    if (row[0] > target) {
        rBottom = mid - 1;
        return rowSearch(matrix, target, rTop, rBottom, cRight);
    } else if (row[cRight] < target) {
        rTop = mid + 1;
        return rowSearch(matrix, target, rTop, rBottom, cRight);
    } else {
        return row;
    }
}