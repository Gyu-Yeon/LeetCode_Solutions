/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    const verifyVowel = (char) => {
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        return vowels.includes(char);       
    }

    const findVowelIndex = (s) => {
        let arr = [];
        let items = [];
        for (let i = 0; i < s.length; i++) {
            if (verifyVowel(s[i])) {
                arr.push(i);
                items.push(s[i]);
            }
        }
        return [arr, items];
    }
    const [spot, vowels] = findVowelIndex(s);
    const reversedVowels = vowels.reverse();
    

    const fillReversedVowelsToOriginString = (s, spot, vowels) => {
        let ans = s.split("");
        for (let i = 0; i < spot.length; i++) {
            // cloneS[spot[i]] = vowels[i];
            ans[spot[i]] = vowels[i];
        }
        return ans.join("");
    }
    return fillReversedVowelsToOriginString(s, spot, reversedVowels);
};