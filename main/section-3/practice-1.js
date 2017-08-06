'use strict';
function includes(collection,item){
      for(let obj of collection){
            if (item == obj){
                  return true
            }
      }
      return false
      
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let new_arr=[];
    for(let itemA of collectionA){          
          if (includes(objectB.value,itemA.key)){
                new_arr.push({key:itemA.key,count:itemA.count-1});
          }else{
                new_arr.push({key:itemA.key,count:itemA.count})
          }         
    }
    return new_arr;
}
