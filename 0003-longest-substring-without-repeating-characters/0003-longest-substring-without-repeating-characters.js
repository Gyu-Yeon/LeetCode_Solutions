/**
 * @param {string} s
 * @return {number}
 */
const calculateLongestItem = (nums) => {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (largest.length < nums[i].length) {
            largest = nums[i];
        }
    }
    if (largest) {
        return largest.length;
    } else return 0;
}

var lengthOfLongestSubstring = function(s) {
    let sub = "";
    let loopCounter = 0;
    let counter = 0;
    let items = [];    

    while (loopCounter < s.length) {
        if (sub.includes(s[loopCounter])) {
            items.push(sub);
            sub = s.slice(counter + 1, counter + 2);
            counter+=1;
            loopCounter = counter + 1 ;
        } else {
            sub = s.slice(counter, loopCounter + 1);
            loopCounter = loopCounter + 1;
        }               
    }
    items.push(sub);
    
    const answer = calculateLongestItem(items);
    return answer
};