/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // if (nums.length === 1 ) {
    //     if (nums[0] === target){
    //         return 0;
    //     } else return -1
    // }
    let left = 0;
    let right = nums.length-1;
    let middle = Math.floor((left + right) / 2)
    console.log(left, right, middle)
    while (left <= right) {
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] > target) {
            right = middle - 1;
            middle = Math.floor((left + right) / 2)
        } else if (nums[middle] < target){
            left = middle + 1;
            middle = Math.floor((left + right) / 2)
        }
    }
    return -1
};