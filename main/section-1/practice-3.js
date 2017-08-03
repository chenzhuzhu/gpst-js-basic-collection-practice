'use strict';
function includes(collection,each_item){
    for(let item of collection){
        if (item == each_item){
            return true;
        }
    }
    return false;
}

module.exports = function collectSameElements(collectionA, objectB) {
    let newarr = new Array();
    for(let item of collectionA){
        if(includes(objectB['value'],item)){
            newarr.push(item)
        }
        
    }
    return newarr;
}

