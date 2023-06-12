/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let obj = {};
    for (let i = 0; i <nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else if (obj[nums[i]] > 0) {
            return nums[i]
        }
    }
};