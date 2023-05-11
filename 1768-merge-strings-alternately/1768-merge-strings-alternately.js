/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let l1 = word1.split("");
    let l2 = word2.split("");
    let ans = [];
    // console.log(l1, l2)
    let len = 0;
    if (word1.length >= word2.length) {
        len = word1.length;
    } else {
        let = word2.length;
    }
    // for (let i = 0; i < len; i++) {
    //     if(l1[i] && l2[i]) {
    //         ans.push(l1.shift());
    //         ans.push(l2.shift());
    //     } else if (!l1[i] && l2[i]) {
    //         ans.push(l2.shift());
    //     } else if (l1[i] && !l2[i]) {
    //         ans.push(l1.shift())
    //     }
    // }
    let i = 0;
    while (l1.length !== 0 || l2.length !== 0){
        if(l1[i] && l2[i]) {
            ans.push(l1.shift());
            ans.push(l2.shift());
        } else if (!l1[i] && l2[i]) {
            ans.push(l2.shift());
        } else if (l1[i] && !l2[i]) {
            ans.push(l1.shift())
        }
    }
    return ans.join("");
};