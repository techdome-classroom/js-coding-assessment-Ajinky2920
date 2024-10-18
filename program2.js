const decodeTheRing = function (s, p) {
   const match =function(SI,PI){
      if (SI===s.length && PI===p.length){ 
      return true;
     }
     if(PI===PI.length){
      return false;
     }
     if (p[PI]==='*'){
      return match(SI,PI+1)
     }
   }
    

  };
  
  module.exports = decodeTheRing;