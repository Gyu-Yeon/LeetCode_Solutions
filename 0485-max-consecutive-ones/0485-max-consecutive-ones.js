/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    // make a counter for distinguish max consecutive
    // counter starts 1 and if next number is same counter++
    // if next number is different counter goes back to 1;    
    let counter = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {            
            counter++;
        } else {
            if (max < counter) {
                max = counter
            }
            counter = 0;
        }
    }
    if (max < counter) {
        max = counter
    }
    return max;
};