const decodeTheRing = function (s, p) {
   const match =function(si,pi){
      if (si===s.length && pi===p.length){ 
      return true;
     }
     if(p===pi.length){
      return false;
     }
     if (p[pi]==='*'){
      return match(si,pi+1)|| (SI<SI.length&&match(SI+1,PI));
     }
     if(P)
   }
    

  };
  
  module.exports = decodeTheRing;