'use strict';
function find(result,item){
      for(let each_obj of result){
            if(each_obj.key == item){
                  return each_obj
            }
      }
      return false;
}

function summarize(collectionA){
      let result =[];
      for(let item of collectionA){
            let obj = find(result,item)
            if (obj){
                  obj.count++;
            }else{
                  result.push({key:item,count:1})
            }
      }
      return result;
}

function discount(collection,compare_array){
      let new_arr=[];
      for(let obj of collection){
            let key = obj.key;
            let count = obj.count;
            if(includes(compare_array.value,key)){
                  count =count-Math.floor(count/3)
            }
            new_arr.push({key,count})
      }
      return new_arr;
}

 function includes(collection,item){
       for(let obj of collection){
             if(obj==item){
                   return obj
             }
       }
       return false
 }

module.exports = function createUpdatedCollection(collectionA, objectB) {
      let summarized_collection = summarize(collectionA)
      return discount(summarized_collection,objectB)
    
}
