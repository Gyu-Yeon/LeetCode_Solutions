/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n < 0) return;
        if (flowerbed[i] === 0) {
            if (!flowerbed[i-1] && !flowerbed[i+1]) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }
    if (n !== 0) {
        return false;
    } else {
        return true;
    }
    console.log(flowerbed)
};

// loop를 돌려 i 자리가 0이라면 앞 뒤를 확인 한 후에 모두 0이면 i자리를 1로 수정 후 n-1 시행을 반복.