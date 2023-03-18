/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    let string = s.split(" ");
    if (pattern.length !== string.length) return false
    let obj = {};    
    for (let i = 0; i < pattern.length; i++){
        if (!obj[pattern[i]]) {
            obj[pattern[i]] = string[i];
        } 
    }    
    for (let i = 0; i < pattern.length-1; i++) {
        for (let j = 1; j < pattern.length; j++) {
            console.log(pattern[i], pattern[j])
            if (pattern[i] !== pattern[j]){
                if (obj[pattern[i]] === obj[pattern[j]]) return false;
            }                
        }
    }    
    for (let i = 0; i < pattern.length; i++) {        
        if (obj[pattern[i]] !== string[i]) return false        
    }
    return true;
};