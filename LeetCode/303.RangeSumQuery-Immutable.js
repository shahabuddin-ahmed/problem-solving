/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.aggreSumArr = [0];
    for (let i = 0; i < nums.length; i++) {
        this.aggreSumArr[i + 1] = this.aggreSumArr[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    console.log(this.aggreSumArr);
    return this.aggreSumArr[right + 1] - this.aggreSumArr[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const result = new NumArray([1,2,3,4,5,6,7]);
console.log(result.sumRange(2, 3));





/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
	this.nums = nums;
    // this.sum = nums.reduce((prev, curr) => prev + curr);
};

/** 
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
	let sum = 0;
    while (left <= right) {
		sum += this.nums[left];
		left++;
	}

	return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

 var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
 var param_1 = obj.sumRange(0, 2);
 console.log(param_1);
