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
    let aa = Object.values(obj);
    let a = aa[0];
    for (let i = 1; i < aa.length; i++) {
        const key = aa[i];
        if (a === key) {
            return false;
        } else {
            a = key;
        }
    }
    return true;
};