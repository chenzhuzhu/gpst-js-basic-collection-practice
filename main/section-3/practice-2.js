'use strict';
function includes(collection,item){
      for(let each_value of collection){
            if(each_value == item){
                  return true
            }
      }
      return false
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
      let new_arr=[];
      for(let objA of collectionA){
            let key=objA.key;
            let count =objA.count;
            if(includes(objectB.value,key)){
                  count =count - Math.floor(count/3);  
            }
            new_arr.push({key,count});
      }
      console.log(new_arr);
      return new_arr;
}
