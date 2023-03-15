/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    //distinct number should be more than 3   
    let sorted = nums.sort((a,b)=> {
        return a -b 
    })
    if (nums.length < 3) {
        return sorted[sorted.length-1]
    }
    let counter = 3;
    let index = sorted.length-1;
    let max = sorted[sorted.length-1]+1
    while (counter > 0){
        if (index === -1) break;
        if (max > sorted[index]){
            max = sorted[index];
            counter--;
            index--;
        }else if(max === sorted[index]){
            index--
        } else {
            index--
        }
    }
    if (counter > 0) {
        return sorted[sorted.length-1]
    }
    return max
};