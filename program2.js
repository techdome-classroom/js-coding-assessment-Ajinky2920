const decodeTheRing = function (s, p) {
   const match =function(SI,PI){
      if (SI===s.length && PI===p.length){ 
      return true;
     }
     if(PI===PI.length){
      return false;
     }
     if (p[PI]==='*'){
      return match(SI,PI+1)|| (SI<SI.length&&match(SI+1,PI));
     }
     if(SI)
   }
    

  };
  
  module.exports = decodeTheRing;