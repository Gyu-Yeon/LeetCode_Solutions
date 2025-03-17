/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
    }
    console.log(obj);
    let ans = Object.values(obj);
    let obj2 = {};
    for (let i = 0; i < ans.length; i++) {
        const item2 = ans[i];
        if (!obj2[item2]) {
            obj2[item2] = 1 ; 
        } else {
            return false;
        }
    }
    return true;
};