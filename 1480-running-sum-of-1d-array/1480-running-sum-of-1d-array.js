/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sum = 0;
  let ans = [];
  for (let i = 0; i <nums.length; i++) {
      sum = sum + nums[i]
      ans.push(sum);
  }
 return ans
};