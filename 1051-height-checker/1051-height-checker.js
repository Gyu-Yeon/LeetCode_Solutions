/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let copied = [...heights]
    let order = copied.sort((a,b) => {
        return a-b
    })      
    let counter = 0 ;
    for (let i = 0; i < heights.length; i++) {
        if (order[i] !== heights[i]) {
            counter++
        }
    }
    return counter
};