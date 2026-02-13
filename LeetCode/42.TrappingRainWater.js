/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (!height.length) {
        return 0;
    }

    let left = 0,
        right = height.length - 1;
    let leftMax = height[left],
        rightMax = height[right];
    let count = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                count += leftMax - height[left];
            }
        } else {
            right--;
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                count += rightMax - height[right];
            }
        }
    }

    return count;
};


const result = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log(result);