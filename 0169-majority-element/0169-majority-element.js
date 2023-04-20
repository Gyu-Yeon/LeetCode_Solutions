/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //hash each nums in an obj
    //loop the object and find number that is bigger than n / 2    
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {            
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++
        }
    }
    console.log(obj)
    for (const num in obj) {
        if(obj[num] > nums.length/2) {
            return num
        }
    }
};