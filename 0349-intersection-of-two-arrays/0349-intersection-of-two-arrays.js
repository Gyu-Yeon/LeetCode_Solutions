/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let obj1= {}
    for (let i = 0; i < nums1.length; i++) {
        if (!obj1[nums1[i]]) {
            obj1[nums1[i]] = 1
        }
    }
    let answer = [];
    for (let j = 0; j < nums2.length; j++) {
        if (obj1[nums2[j]] === 1) {
            answer.push(nums2[j])
            obj1[nums2[j]] = 0;
        } 
    }
    return answer
};