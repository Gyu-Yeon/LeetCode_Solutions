/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) { 
    let n = num;
    let s = num.toString();   
    if (s.length === 1) {
        return n
    } else {
        let sum = 0;
        for (let i = 0; i < s.length; i++) {
            sum += parseInt(s[i])
        }
        console.log(sum)
        return addDigits(sum)
    }    
};