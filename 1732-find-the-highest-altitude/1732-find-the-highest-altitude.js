/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let high = 0;
    let alt = 0;
    for (let i = 0; i < gain.length; i++) {
        alt = alt + gain[i];  
        if (high < alt) {
            high = alt;
        }
          
        console.log(alt);    
    }
    return high;
};