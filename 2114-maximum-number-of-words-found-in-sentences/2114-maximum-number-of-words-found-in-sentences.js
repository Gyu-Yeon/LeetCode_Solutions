/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let s = sentences.join(",").split(",")
    let counter = 0;
    for (let i = 0; i < s.length; i++){
        let w = s[i].split(" ")
        if(w.length > counter ) {
            counter = w.length;
        }
    }
    return counter
};