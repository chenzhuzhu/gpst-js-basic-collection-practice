'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var newarr = new Array();
  for(var i = 0;i<collectionA.length;i++){
      for(var j = 0;j<collectionB.length;j++){
          if(collectionA[i]===collectionB[j]){
              newarr.push(collectionA[i])
          }
      }
  }
  return newarr;
}
