/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reversed = s.replace(/[^0-9a-z]/gi, '').replaceAll(' ', '').toLowerCase().split("").reverse().join("")
    let string = s.replace(/[^0-9a-z]/gi, '').replaceAll(' ', '').toLowerCase()
    console.log(string)
    console.log(reversed)
    if (reversed === string) {
        return true
    } else return false
};