const decodeTheRing = function (s, p) {
   const match =function(si,pi){
      if (si===s.length && pi===p.length){ 
      return true;
     }
     if(p===pi.length){
      return false;
     }
     if (p[pi]==='*'){
      return match(si,pi+1)|| (si<si.length&&match(si+1,pi));
     }
     if(P)
   }
    

  };
  
  module.exports = decodeTheRing;