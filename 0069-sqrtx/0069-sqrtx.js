/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 ) return 0
    if (x === 1) return 1 
    if (x === 2) return 1
    if (x === 3) return 1
   let y = x / 2;
   let z = x    
   while(y * y > x) {            
        y = y / 2
        z = z / 2
        console.log(y,z)       
          
   } 
    
  for (let i = Math.ceil(y); i < z; i++) {
      if ((i+1) * (i+1) > x) {
          return i
      }
  }
  
};

