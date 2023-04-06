/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // start with index of digits.length-1.
    // if digits.at(-1) === 9  case 1
    // if digits.at(-1) !== 9  case 2
    // case 1 put 0 by using splice.
    // do the something to digits.at(second last)
    if (digits.length === 0) {
        return digits
    }
    for (let i = digits.length-1; i > -1; i--) {
        if (digits[i] === 9) {
            if (i === 0) {
               digits.splice(i,1,0);
               digits.unshift(1);
               return digits
            } 
            digits.splice(i,1,0);
        } else {
            digits.splice(i, 1, digits[i]+1)
            console.log(digits)
            break;
        }
    }
    return digits
};