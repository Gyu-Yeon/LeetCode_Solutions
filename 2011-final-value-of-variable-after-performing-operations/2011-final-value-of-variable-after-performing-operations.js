/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let counter = 0;
    for (let i = 0; i < operations.length; i ++) {
        console.log(operations[i]);
        for(let j = 0; j < operations[i].length; j++) {
            if (operations[i][j] === "+") {
                counter++;
                break;
                } else if (operations[i][j] === "-"){
                    counter--;
                    break;
                }
        }
    }
    return counter
};