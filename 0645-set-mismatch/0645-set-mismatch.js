/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {    
    let obj = {};
    let length = nums.length;
    for (let i = 1; i < length +1; i++) {
        if (!obj[i]) {
            obj[i] = 1;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] > 0) {
            obj[nums[i]]  = 0;
        } else if (obj[nums[i]] === 0) {
            obj[nums[i]] = -1;            
        } 
    }
    console.log(obj)
    let arr =[];
    for (let i = 1; i < length+1; i++) {
        if (obj[i] === -1) {
            arr.push(i)
        }
    }
    for (let i = 1; i < length+1; i++) {
        if (obj[i] === 1) {
            arr.push(i)
        }
    }
    return arr
};