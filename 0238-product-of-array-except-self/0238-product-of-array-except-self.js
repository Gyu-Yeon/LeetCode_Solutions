/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    
    // 왼쪽에서부터의 곱을 계산
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // 오른쪽에서부터의 곱을 계산하면서 최종 값 구하기
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
};