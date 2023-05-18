/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let result = [[],[]]
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    for(let val of nums1) {
        if(!nums2.includes(val)) {
            result[0].push(val)
        }
    }
    for(let val of nums2) {
        if(!nums1.includes(val)) {
            result[1].push(val)
        }
    }
    return result
};