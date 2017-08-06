'use strict';
function expand(collection){
      let temp_result =[];
      for(let each_item of collection){
            if (each_item.length ===1){
                 temp_result.push(each_item);
            }else{
                  let {key,count}=split(each_item);
                  push(temp_result,key,count);
            }
      }
      return temp_result
}

function split(item){
      let splited_item = item.split('-');
      return {key:splited_item[0],count:parseInt(splited_item[1],10)}
}

function push(result,key,count){
      for(let i=0;i<count;i++){
            result.push(key);
      }
}

function summarize(collection){
      let newarr=[];    
      for(let item of collection){
            let this_obj =find(item,newarr);
            if(this_obj){
                this_obj.count++;
            }else{
                newarr.push({key:item,count:1});
            }
      }
      return newarr;
      
}

function find(item,newarr){
      for(let each_item of newarr){
            if(item === each_item.key){
                  return each_item;
            }         
      }
      return false;
}

module.exports = function countSameElements(collection) {
    let expand_collection = expand(collection);
    return summarize(expand_collection);

   }



