/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "A" || s[i] === "e" || s[i] === "E" || s[i] === "i" || s[i] === "I" || s[i] === "o" || s[i] === "O" || s[i] === "u" || s[i] === "U") {
            vowels.push(s[i]);
        } 
    }
   
    const converted = vowels.reverse();
    let string = s.split("");
    let counter = 0;
    for (let i = 0; i< string.length; i++) {
        if (string[i] === "a" || string[i] === "A" || string[i] === "e" || string[i] === "E" || string[i] === "i" || string[i] === "I" || string[i] === "o" || string[i] === "O" || string[i] === "u" || string[i] === "U") {
            string[i] = converted[counter];
            counter++;
        }
    }
    return string.join("")
};