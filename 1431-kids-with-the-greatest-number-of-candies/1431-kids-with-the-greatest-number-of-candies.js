/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const findBiggestNum = (candies) => {
    const copiedCandies = [...candies];
    const sortedNums = copiedCandies.sort((a,b) => b - a);
    return sortedNums[0];
};

var kidsWithCandies = function(candies, extraCandies) {
    const biggestNum = findBiggestNum(candies);
    
    let ans = [];
    for (let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= biggestNum) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    return ans;
};

// candies중 가장 큰 수를 찾는 함수를 만들어 가장 큰 수를 return하여 변수에 저장.
// candies에 루프를 돌려 각각의 수에 extraCandies를 더한 수가 위에서 찾은 가장 큰 수보다 크거 같다면 
// 새로운 array에 해당 index에 true를 push, 아닐 시 false를 push
// array를 return.