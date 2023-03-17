/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {    
    let left = 0;
    let right = 1    
    while(right < nums.length) {        
        if (nums[left] === 0 && nums[right] === 0) {
            right++            
        } else if (nums[left] !== 0 && nums[right] !== 0) {            
            right++
            left++
        } else if (nums[left] === 0 && nums[right] !== 0){
            let tem = nums[left];
            nums[left] = nums[right];
            nums[right] = tem;            
            left++;
            right++
        } else {
            left++
            right++
        }
        
    }          
  return nums
};