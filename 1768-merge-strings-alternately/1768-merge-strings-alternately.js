/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const calcLength = (w1, w2) => {
        let longest;
        if (w1.length <= w2.length) {
            longest = w2;
        } else {
            longest = w1;
        }
        return longest.length;
    }

var mergeAlternately = function(word1, word2) {
    let ans = [];
    const lengthOfLoop = calcLength(word1, word2);
    for (let i = 0; i < lengthOfLoop; i++) {
        if (word1[i]) {
            ans.push(word1[i]);            
        }
        if (word2[i]) {
            ans.push(word2[i]);
        }
    }
    return ans.join("");
};

// 우선 변수 ans을 만든다.
// word1 과 words2중 길이가 더 긴 words를 기준으로 반복문을 생성한다.
// words1의 첫번째 부터 번갈아 변수 ans에 push 한 후, 마지막에 join을 사용하여 return.