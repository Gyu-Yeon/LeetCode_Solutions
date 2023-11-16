var canCompleteCircuit = function(gas, cost) {
    let index=0, totalgas=0,remaining=0
    for(var i=0;i<gas.length;i++){
        totalgas += (gas[i]-cost[i]);
        remaining += (gas[i]-cost[i]);
        if(remaining<0){
            index=i+1; remaining=0;
        }
    }
    if(totalgas<0) return -1;
    return index;
};