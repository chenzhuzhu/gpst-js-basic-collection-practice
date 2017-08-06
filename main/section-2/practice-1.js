'use strict';
function find(item,newarr){
      for(let each_item of newarr){
            if(item == each_item.key){
                  return each_item;
            }         
      }
      return false;
}


module.exports = function countSameElements(collection) {
    let newarr=[];    
    for(let item of collection){
          let this_obj =find(item,newarr);
          if(this_obj){
                this_obj.count++;
          }else{
                newarr.push({key:item,count:1});
          }
    }
    return newarr
}
