class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        current_max = prices[0]
        current_max_date = 0
        current_min = prices[0]
        current_min_date = 0
        current_profit = 0
        max_profit = current_profit

        for date, price in enumerate(prices):            
            if price > current_max:
                current_max = price
                current_max_date = date
            
            if price < current_min:
                current_min = price
                current_min_date = date
                current_max = current_min
            
            if (current_max_date > current_min_date) and (current_max > current_min):
                current_profit = current_max - current_min
                max_profit = max(max_profit, current_profit)

        return max_profit