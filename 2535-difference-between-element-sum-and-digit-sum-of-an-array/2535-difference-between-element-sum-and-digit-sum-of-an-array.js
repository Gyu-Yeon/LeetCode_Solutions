/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    function sumOfDigits(num) {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let digitSum = 0,
        elementSum = 0;

    for (let num of nums) {
        digitSum += sumOfDigits(num);
        elementSum += num;
    }

    return Math.abs(digitSum - elementSum);
};