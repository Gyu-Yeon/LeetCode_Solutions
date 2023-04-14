/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // array 안에 마지막 숫자 이후의 0 은 모두 제외.
    // nums1 과 nums2의 같은 index의 숫자를 비교 하여 nums1[i] > nums2[i] 이면 
    // splice로 추가하기.    
    //  let counter = 0;
    
    // for (let i = 0; i < m + n; i++) {
    //     if (nums1[i] >= nums2[counter]) {
    //         nums1.splice(i, 0, nums2[counter])            
    //         counter++
    //         // console.log(nums1)            
    //     } else if (!nums1[i]) {
    //         nums1.splice(i,0, nums2[counter])
    //         counter++
    //         // console.log(nums1)             
    //     }
    // }   
    // nums1 = nums1.splice(0, m+n)
    // console.log(nums1.splice(0, m+n))
    // console.log(nums1)

    for(let i = nums1.length-1; i > m-1; i--){
        nums1.pop();
    }
    console.log(nums1)
    
    let counter = 0;
    
    for (let i = 0; i < m + n; i++) {
        if (nums1[i] >= nums2[counter]) {
            nums1.splice(i, 0, nums2[counter])            
            counter++ 
                             
        } else if (nums1[i] === undefined || nums1[i] === null) {
            nums1.splice(i,0, nums2[counter])
            counter++
                        
        }
    }   
    console.log(nums1) 
    // for(let i = nums1.length-1 ; i >= 0; i--){
    //     if (nums1[i] === 0){
    //         nums1.pop();
    //     }
    // }
};