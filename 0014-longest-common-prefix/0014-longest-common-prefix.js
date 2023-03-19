/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    if (strs.length < 2) {
        return strs[0];
    } 
    let num = 0;    
    for(let i = 0; i < strs.length-1; i++){
        for(let j = 0; j < strs[i].length; j++){
            if(strs[i][j] !== strs[i+1][j] || strs[i+1].length < j){                              
                num = j;                
                break;
            } else {
                num = j + 1;
            }      
        }
        console.log(num)
        if (num === 0) {
            return ""
        }
        strs[i+1] = strs[0].slice(0, num);             
    }    
   
    return strs[0].slice(0, num);
};