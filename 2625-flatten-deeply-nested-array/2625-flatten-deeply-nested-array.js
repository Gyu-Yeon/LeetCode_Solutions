/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
const flat = function (arr, n) {
    if (n === 0)
        return arr;
    let res = [];
    for (let i in arr) {
        if (Array.isArray(arr[i]))
            res.push(...flat(arr[i], n - 1));
        else
            res.push(arr[i]);
    }
    return res;
}