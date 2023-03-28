/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj = {};
    let a = s.split("")
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] = obj[s[i]] + 1;
        }
    }
    console.log(obj)
    let b = t.split("");
    for (let i = 0 ; i < b.length; i++) {
        if (obj[b[i]] > 0) {
            obj[b[i]] = obj[b[i]] - 1;
        } else {
            return b[i]
        }
    }
};