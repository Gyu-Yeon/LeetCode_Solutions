/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let alphabets = ['blank', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    if (columnTitle.length === 1) {
        return alphabets.indexOf(columnTitle)
    } 
    let answer = 0;
    for(let i = 0; i < columnTitle.length; i++) {
        answer = answer + ((26 ** (columnTitle.length - (i+1))) * alphabets.indexOf(columnTitle[i]))
        console.log(answer)
    }
    return answer
};  