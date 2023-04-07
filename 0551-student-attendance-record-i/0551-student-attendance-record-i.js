/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            counter++
        }
    }
    if (counter >= 2) {
        return false
    }
    for (let i = 0; i < s.length-2; i++) {
        if (s[i] === "L" && s[i+1] === "L" && s[i+2] === "L"){
            return false
        }
    }
    return true
};