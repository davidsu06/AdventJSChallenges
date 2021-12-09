function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if ( prices[j] - prices[i] > maxProfit ) maxProfit = prices[j] - prices[i];
    }
  }

  return maxProfit || -1;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log( maxProfit(pricesBtc) ); // 16

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log( maxProfit(pricesEth) ); // 60

const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log( maxProfit(pricesDoge) ); // -1