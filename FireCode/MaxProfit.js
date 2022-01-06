function maxProfit(prices) {
	let min = prices[0], maxProfit = 0;
	const length = prices.length;
    for (let i = 1; i < length; i++) {
		if ((prices[i] - min) > maxProfit) {
			maxProfit = prices[i] - min;
		}

		if (prices[i] < min) {
			min = prices[i];
		}
	}
	return maxProfit;
}

const result = maxProfit([30,25,20,15]);
console.log(result);