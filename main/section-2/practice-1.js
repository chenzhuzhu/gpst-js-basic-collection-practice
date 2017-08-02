'use strict';

module.exports = function countSameElements(collection) {
    var newarr=[];    
    for(var i=0;i<collection.length;){
        var this_count=0;   
        for(var j=i;j<collection.length;j++){
            if (collection[i]==collection[j]){
                this_count+=1;
            }
        }
        newarr.push({key:collection[i],count:this_count})
        i+=this_count;        
    }
    return newarr;
}
