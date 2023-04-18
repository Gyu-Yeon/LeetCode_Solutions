/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

//find 3 0s in a row
var canPlaceFlowers = function(flowerbed, n) {
  flowerbed.unshift(0);
    flowerbed.push(0);
    for (let i = 1; i < flowerbed.length-1; i++) {
        if (flowerbed[i-1] + flowerbed[i] + flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            if (n > 0) {
                n--
            } else {
                break;
            }
        }
    }
    if (!n) {
        return true;
    }
    return false
};