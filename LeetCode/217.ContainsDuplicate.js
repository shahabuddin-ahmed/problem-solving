function containsDuplicate(nums) {
	const counterMap = new Map();
	const length = nums.length;

	for (let i = 0; i < length; i++) {
		if (counterMap.get(nums[i])) {
			return true;
		}
		counterMap.set(nums[i], 1);
	}
	return false;
}

const result = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
console.log(result);


const containsDuplicate2 = (nums) => {
	const set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			return true;
		}
		set.add(nums[i]);
	}
	return false;
}

const result2 = containsDuplicate2([1,1,1,3,3,4,3,2,4,2]);
console.log(result2);