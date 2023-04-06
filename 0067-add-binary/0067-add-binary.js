/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if ( a === "0" && b === "0") {
        return "0";
    }
    let reversedA = a.split("").reverse().join("");
    let reversedB = b.split("").reverse().join("");        
    let answer = [];
    let bigger = 0;
    if (reversedA.length - reversedB.length >= 0) {
        bigger = reversedA.length;
    } else if(reversedA.length - reversedB.length < 0) {
        bigger = reversedB.length;
    }
    console.log(bigger)    
    for(let i = 0; i < bigger; i++){
        if(!answer[i] || answer[i] === "0") {
            if(reversedA[i] === "1" && reversedB[i] === "0" ||
               reversedB[i] === "1" && reversedA[i] === "0" ||
               reversedA[i] === "1" && !reversedB[i]        ||
               reversedB[i] === "1" && !reversedA[i]        
               
            ) {
                answer.push("1");
            } else if (reversedA[i] === "1" && reversedB[i] === "1") {
                answer.push("0");
                answer.push("1");
            } else if(reversedA[i] === "0" && reversedB[i] === "0"||
            reversedA[i] === "0" && !reversedB[i]        ||
               reversedB[i] === "0" && !reversedA[i] ) {
                answer.push("0")
            }
        } else if(answer[i] === "1"){
            if(reversedA[i] === "1" && reversedB[i] === "0" ||
               reversedB[i] === "1" && reversedA[i] === "0" ||
               reversedA[i] === "1" && !reversedB[i]        ||
               reversedB[i] === "1" && !reversedA[i]                         
            ) {
                answer.pop()
                answer.push("0");
                answer.push("1");
            } else if (reversedA[i] === "1" && reversedB[i] === "1") {
                answer.pop()
                answer.push("1");
                answer.push("1");
            } else if(reversedA[i] === "0" && reversedB[i] === "0" ||
                      reversedA[i] === "0" && !reversedB[i]        ||
                      reversedB[i] === "0" && !reversedA[i]   
                      ) {
                            answer.pop();
                            answer.push("1")
            }
        }
        console.log(answer)
    }
   return answer.reverse().join("");
};