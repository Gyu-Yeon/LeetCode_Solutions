/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let ans = [];
    let sorted = nums.sort((a,b) => a-b);
    console.log(sorted)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === target) {
            ans.push(i)
        }
    }
    return ans
};