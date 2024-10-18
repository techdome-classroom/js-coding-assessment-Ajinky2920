const decodeTheRing = function (s, p) {
   const match =function(si,pi){
      if (si===s.length && pi===p.length){ 
      return true;
     }
     if(p===pi.length){
      return false;
     }
     if (p[pi]==='*'){
      return match(si,pi+1) || (si<si.length&&match(si+1,pi));
     }
     if(p[pi]==='?'){
      return si<s.length && match(si+1,pi+1);
     }
     if(si<s.length && s[si]===p[pi]){
      return match(si+1,pi+1);
     }
     return false;
   }
   return match(0,0);
  };
  console.log(decodeTheRing("hello", "h*llo"));
  console.log(decodeTheRing("secret", "sec?"));
  console.log(decodeTheRing("codeword", "c*de"));
  module.exports = decodeTheRing;