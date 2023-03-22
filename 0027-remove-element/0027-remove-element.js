/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return 0 ;
    if (nums.length === 1) {
        if (nums[0] !== val) {
            return 1
        } else return 0      
    }     
    let i = 0;
    for(let j = 0 ; j < nums.length; j++) {
        if (nums[i] === val) {
            if(nums[i] !== nums[j]){
                let tem = nums[i];
                nums[i] = nums[j]                 
                nums[j] = tem
                j--                 
            }                        
        } else {            
            i++
        }              
    }
    console.log(i)    
    return i
};