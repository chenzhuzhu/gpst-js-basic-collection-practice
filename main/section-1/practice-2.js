'use strict';

function includes(collection,each_item){
    for(let item of collection){
        if(item==each_item){
            return true;
        }          
    }
    return false;
}
module.exports = function collectSameElements(collectionA, collectionB) {
    let new_arr=new Array();
    for(let item of collectionA){
        if(includes(collectionB[0],item)){
            new_arr.push(item);          
        }
    }
    return new_arr;
}
