/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // find lowest number and store it in variable
    // find the biggest number after index of lowest number's index and store it in variable
    // 
    // let s = prices[0];
    // let ans = 0;
    // for(let i = 1; i < prices.length-1; i++) {
    //     if (s > prices[i]) {
    //         s = prices[i];
    //     }
    // }
    // let b = 0;
    // console.log(prices.indexOf(s) + 1)
    // for(let j = prices.indexOf(s) + 1; j < prices.length; j++) {
    //     let num = prices[j] - s;
    //     if (num > 0) {
    //         if (num > b) {
    //             b = num
    //         }
    //     }
    // }
    // return b
    // let i = 0;    
    // let gap = 0;
    // while( i < prices.length-1) {
    //     for (let j = i+1; j <prices.length; j++){
    //         if (prices[i] < prices[j]){
    //             if (prices[j] - prices[i] > gap) {
    //                 gap = prices[j] - prices[i]
    //             }
    //         }
    //     }
    //     i++
    // }
    // return gap
    /* set a loop and compare relative num and if next number is bigger than previous one set previous 
       one to bDay. 
       store each number's gap in variable 'gap'
       move to next index and do the samething till when previous number becomes bigger than next number
    */
    // let buy = 0;
    // let sell = 0;
    // let gap = 0;
    // for (let i = 0; i < prices.length-1; i++) {
    //     // when price increase we found possible sellday;
    //     if (prices[i] < prices[i+1]) {
    //         buy = prices[i]
    //         sell = prices[i+1]
    //     } else if (prices[i] > prices[i+1]) { // when check the gap;
    //         sell = prices[i];

    //     }
    // }
    let lowest = prices[0];
    let currentProfit = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (lowest < prices[i]) {
            currentProfit = prices[i] - lowest;
            if( maxProfit < currentProfit) {
                maxProfit = currentProfit
            }
        } else if(lowest > prices[i]) {
            lowest = prices[i]
        }
        console.log(maxProfit)
    }
    // console.log(maxProfit)
    return maxProfit
};