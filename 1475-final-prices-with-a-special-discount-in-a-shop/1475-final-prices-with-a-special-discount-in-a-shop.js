/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
   let i = 0 ; 
   let j = 1 ; 
   while ( i < prices.length-1){
       switch (true) {
            case prices[j] <= prices[i]:
                prices[i] -= prices[j];
                i++;
                j = i + 1;
                break;

            case j === prices.length - 1:
                i++;
                j = i + 1;
                break;

            default:
                j++;
                break;
        }
   }
    return prices;
};