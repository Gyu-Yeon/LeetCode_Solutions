/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let counter = 1;    
    let stairs = 0;
    while (n >= counter) {
        n = n - counter
        stairs++
        counter++
    }
    return stairs
};