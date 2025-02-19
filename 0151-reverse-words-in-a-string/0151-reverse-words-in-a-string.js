/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(" ");
    const reversed = words.reverse();
    let arr = [];
    for (let i = 0; i < reversed.length; i++) {
        if (reversed[i] !== '') {
            arr.push(reversed[i])
        }
    }
    return arr.join(" ");
};