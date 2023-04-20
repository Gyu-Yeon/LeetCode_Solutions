/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //hash
    //make an object store each index as a key
    //loop the array and check the number's 갯수
    
    let obj = {};
    for (let i = 0; i < nums.length; i++){
        if (!obj[nums[i]]){
            obj[nums[i]] = 1
        } else if (obj[nums[i]] !== 0) {
            obj[nums[i]] = obj[nums[i]] + 1
        }         
    }
    for (const property in obj) {
        if( obj[property] === 1) {
            return property
        }
}
};