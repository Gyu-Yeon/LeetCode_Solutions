/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length === 1) {
        return 1
    }
 let i = s.length - 1;
 let j = i 
 while (s[i] === " ") {
     i--
     j = i;
 }

 while (s[j] !== " "  && j >= 0) {
     j--
 }
  console.log(i,j)
 return i - j
   
};

//더 이상 문자가 안나왔을때 