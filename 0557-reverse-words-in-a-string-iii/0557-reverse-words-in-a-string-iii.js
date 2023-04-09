/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split("");
    let arr = [];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " "){
            arr.push(str.slice(counter, i))
                counter = i +1
            
        } if (i === str.length -1) {
            arr.push(str.slice(counter))
        }
    }
    let ans = arr.map((item) => {
        return item.reverse().join("")
    });
    return (ans.join(" "))
};