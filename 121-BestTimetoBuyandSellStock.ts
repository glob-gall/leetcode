function maxProfit(prices: number[]): number {
    let profit = 0
    let minPrice = prices[0]

    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) minPrice = prices[i]
      if (prices[i] - minPrice > profit) profit = prices[i] - minPrice
    }

    return profit
}

const prices = [7,1,5,3,6,4] // 5
// const prices = [7,6,4,3,1] // 0
// const prices = [2,4,1] // 2

console.log(maxProfit(prices));
