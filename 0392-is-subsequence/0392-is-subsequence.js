/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let c1 = 0;
    let c2 = 0;
    let counter = 0;
    while (c1 < s.length && c2 < t.length) {        
        if (s[c1] === t[c2]) {
            c1++
            c2++;
            counter++
        } else {
            c2++
        }
    }
    if (counter === s.length) {
        return true
    } else return false
};