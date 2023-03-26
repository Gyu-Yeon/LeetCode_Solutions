/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let obj1 = {};
    for (let i = 0; i < nums.length; i++) {
        if (!obj1[nums[i]]) {
            obj1[nums[i]] = 1
        }
    }
    console.log(obj1)
    let answer = [];
    for (let j = 1; j < nums.length+1; j++) {
        if (!obj1[j]) {
            answer.push(j)
        }
    }
    return answer
};