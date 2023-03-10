/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let first = 0;
    let second = 1;
    while (first < nums.length-1) {        
        if (nums[first] + nums[second] === target) {
            return [first, second]
        }
        if (second === nums.length -1){            
            first++;
            second = first + 1;
        } else {
            second++
        }        
    }
};