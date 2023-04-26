/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let move = moves.split("");
    console.log(move)
    let obj = {};
    for (let i = 0; i < move.length; i++) {
        if (obj[moves[i]] > 0) {
            obj[moves[i]] =  obj[moves[i]] +1
        } else {
             obj[moves[i]] = 1;
        }
    }
    if (obj["U"] === obj["D"] && obj["L"] === obj["R"]) {
        return true
    } else return false
};
