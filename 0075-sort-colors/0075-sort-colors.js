/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let color = {"0": "red", "1": "white", "2": "blue"};
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] === 0) {
           left++
       }
        if (nums[right] === 0 && nums[left] !== 0) {
            let tem = nums[left];
            nums[left] = nums[right];
            nums[right] = tem;
            left++;
        }
        if (nums[right] !== 0 && nums[left] !== 0) {
            right--;
        }
    }
    right = nums.length -1;
    console.log(nums)
    console.log(left)
    while (left < right) {
        if (nums[left] === 1) {
           left++
       }
        if (nums[right] === 1 && nums[left] !== 1) {
            let tem = nums[left];
            nums[left] = nums[right];
            nums[right] = tem;
            left++;
        }
        if (nums[right] !== 1 && nums[left] !== 1) {
            right--;
        }
    }
    return nums
};