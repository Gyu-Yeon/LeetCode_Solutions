/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let curr = 0;    
    let left = 0
    let right = height.length-1
    while (left < right) {
        let width = right - left
        let height1 = 0
        if (height[left] > height[right]) {
            height1 = height[right]
        } else {
           height1 = height[left]
        }        
        curr = width * height1;
        if (max < curr) {
        max = curr
    }
    if (height[left] > height[right]) {
        right--
    } else{
        left++
    }
    }
    return max
};

