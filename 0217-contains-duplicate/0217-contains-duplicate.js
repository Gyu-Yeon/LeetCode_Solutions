/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     for(let i = 0; i < nums.length; i++) {
//         let newNum = nums.slice(i+1)
//         // console.log(newNum)        
//         if (newNum.indexOf(nums[i]) >= 0 ) {
//             return true
//         }        
//     }
//     return false
// };

var containsDuplicate = function(nums) {
    for(let i = nums.length-1; i > -1; i--) {
        let n = nums.pop();        
        if (nums.indexOf(n) >= 0 ) {
            return true
        }        
    }
    return false
};