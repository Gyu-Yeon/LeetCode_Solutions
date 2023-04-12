/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let answer = [1,2];
    if ( n === 1 || n === 2) {
        return n;
    } 
    let i = 0;
    while(i !== n-2) {
        answer.push(answer[i] + answer[i+1])
        i++
    }
    return answer.pop()
};

