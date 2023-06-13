/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let ans = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            ans.push(i)
        } else if (i % 5 === 0) {
            ans.push(i)
        } else if (i % 7 === 0) {
            ans.push(i);
        }
    }
    return ans.reduce((a, b) => a + b, 0)
};