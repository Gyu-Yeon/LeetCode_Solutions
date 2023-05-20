/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
	let ones = 0;
    while(n!=0) {
    	ones = ones + (n & 1);
    	n = n>>>1;
    }
    return ones;
}