function maxProfit (prices) {
    let min = Number.MAX_VALUE, max = 0, profit = 0;
	const length = prices.length;
	if (!length) {
		return 0;
	}
	for (let i = 0; i < length; i++) {
		if (prices[i] < min) {
			min = prices[i];
			max = 0;
		}

		if (prices[i] > max) {
			max = prices[i];
		}
		if ((max - min) > profit) {
			profit = max - min;
		}
	}
	return profit;
};

const result = maxProfit([2,4,1]);
console.log(result);










// function maxProfit (prices) {
//     let profit = 0;
// 	const length = prices.length - 1;
// 	for (let i = 0; i < length; i++) {
// 		for (let j = i; j < length; j++) {
// 			console.log(prices[i], prices[j+1]);
// 			if (prices[j+1] - prices[i] > profit) {
// 				profit = prices[j+1] - prices[i];
// 			} 
// 		}
// 	}
// 	return profit;
// };

// const result = maxProfit([7,1,5,3,6,4]);
// console.log(result);