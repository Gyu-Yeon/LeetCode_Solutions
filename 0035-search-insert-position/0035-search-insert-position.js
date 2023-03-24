/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 1) {
        if (nums[0] >= target) {
            return 0;
        } else return 1;
    }
    let left = 0;
    let right = nums.length-1
    let middle = Math.floor((right + left)/2);
    while (left <= right) {
        console.log(left, right, middle)
        if (target === nums[middle]) {
            return middle;
        } else if (target > nums[middle]) {
            left = middle + 1;
            middle = Math.floor((right + left)/2);
        } else if (target < nums[middle]) {
            right = middle - 1;
            middle = Math.floor((right + left)/2);
        }      
    } 
    return left
};

