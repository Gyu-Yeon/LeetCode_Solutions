/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "I") {
            arr.push(1)
        } else if(s[i] === "V") {
            arr.push(5)
        } else if(s[i] === "X") {
            arr.push(10)
        } else if(s[i] === "L") {
            arr.push(50)
        } else if(s[i] === "C") {
            arr.push(100)
        } else if(s[i] === "D") {
            arr.push(500)
        } else if(s[i] === "M") {
            arr.push(1000)
        }        
    }    
    for(let i = 0; i < arr.length-1; i++) {        
        if (arr[i] < arr[i+1]) {            
            arr.splice(i,2, arr[i+1] - arr[i])
        }        
    }    
    answer = arr.reduce((acc, curr) => acc + curr)
    return answer
};