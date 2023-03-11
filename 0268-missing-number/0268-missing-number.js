/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let range = nums.length;    
    let sorted = nums.sort((a,b)=> {
        return a - b
    });
    let first = sorted[0];
    let last = range;
   if (sorted[first] !== 0) {
       return 0
   } else if (sorted[sorted.length-1] !== last) {
       return last
   } else {
       for (let i = 0; i < sorted.length; i++) { 
        if (sorted[i + 1] !== sorted[i] +1) {
            return sorted[i] + 1
        }
    }
   }
    
    
    
    
};