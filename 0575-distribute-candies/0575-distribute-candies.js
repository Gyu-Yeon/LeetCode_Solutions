/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let obj = {};
    for (let i = 0; i < candyType.length; i++) {
        if (!obj[candyType[i]]) {
            obj[candyType[i]] = 1;
        }
    }
    let ans = candyType.length / 2;
    let num = 0;
    for (const property in obj) {
        num++
    }    
    if (num >= ans ) {
        return ans
    } else {
        return num
    }
    
};