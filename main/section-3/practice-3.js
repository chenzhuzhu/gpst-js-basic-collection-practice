'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var newarr=[];    
    for(var i=0;i<collectionA.length;){
        var this_count=0;   
        for(var j=i;j<collectionA.length;j++){
            if (collectionA[i]==collectionA[j]){
                this_count+=1;
            }
        }
        newarr.push({key:collectionA[i],count:this_count})
        i+=this_count;        
    }
   // console.log(newarr);
    
    for(var i = 0;i<newarr.length;i++){
        for(var j =0;j<objectB['value'].length;j++){
            if(newarr[i]['key']==objectB['value'][j]){
                newarr[i]['count']=newarr[i]['count']-parseInt(newarr[i]['count']/3)
                
            }
        }
        
    }
    //console.log(newarr);
    return newarr;
    
    
}
