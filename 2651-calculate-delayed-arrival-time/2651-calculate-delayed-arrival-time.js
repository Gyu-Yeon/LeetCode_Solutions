/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let add = arrivalTime + delayedTime;
    if (add >= 24) {
        return add -24
    } else{
        return add
    }
};