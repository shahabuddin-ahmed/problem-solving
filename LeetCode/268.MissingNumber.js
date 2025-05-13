function missingNumber(nums) {
    const length = nums.length;
	const actualSum = (length * (length + 1)) / 2;
	return actualSum - nums.reduce((prev, curr) => prev + curr);
};

const result = missingNumber([9,6,4,2,3,5,7,0,1]);
console.log(result);


// missing number with -v
var missingNumber2 = function(nums) {
    let numSet = new Set(nums);
    
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    for (let i = min; i <= max; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
    
    // If no missing number in between, maybe next number
    return max + 1;
};

const result2 = missingNumber2([9,6,4,2,3,5,7,0,1]);
console.log(result2);