/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let first = word.charCodeAt(0);
    let second = word.charCodeAt(1);
    console.log(first)
    if (first <= 90) {
        if (second >= 97) {
            for (let i = 2; i <word.length; i++) {
                if (word.charCodeAt(i) < 97) {
                    return false;
                }
            }
        } else if (second <= 90) {
            for (let i = 0; i < word.length; i++) {            
            if (word.charCodeAt(i) > 90) {
                return false
                }
            }    
        }        
    } else if (first => 97) {
        for (let i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) < 97) {
                return false
            }
        }
    }    
    
    return true
};