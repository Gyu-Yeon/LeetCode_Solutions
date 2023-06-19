/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let toString = [];
    for (let i = 0; i < nums.length; i++) {
        toString.push(nums[i].toString());
    }
    console.log(toString);
    let splited = [];
    for (let i = 0; i < toString.length; i++){
        for (let j = 0; j < toString[i].length; j++) {
            splited.push(toString[i][j])
        }
    }
    return splited
};