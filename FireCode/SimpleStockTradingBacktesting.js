function maxProfit(closingPrices) {
    const length = closingPrices.length;
	let profit = 0;

	for (let i = 0; i < length; i++) {
		if ((closingPrices[i+1] - closingPrices[i]) > 0) {
			profit += closingPrices[i+1] - closingPrices[i];
			i++;
		}
	}
	return profit;
}

const result = maxProfit([50,100,20,80,20]);
console.log(result);