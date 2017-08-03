'use strict';

module.exports = function countSameElements(collection) {
    var this_array=to_array(collection)
    return to_sum(this_array)
    
    function to_array(collection){
        var new_arr=[];
        for(var i =0;i<collection.length;i++){
            if (collection[i].length>1) {
    	       var this_value = parseInt(collection[i].match(/\d{1,2}/g),10);
    	       var this_key = collection[i].replace(/[^a-z]/ig,"");
    	       console.log(this_value);
        	   new_arr.push({key:this_key,count:this_value});
    	    }else{
                new_arr.push({key:collection[i],count:parseInt(1)});
                }
            }
        return new_arr;   
    }
    
    function to_sum(collection){
        var newarr=[];    
        for(var i=0;i<collection.length;){
            var this_count=0;   
            var count=0;
            for(var j=i;j<collection.length;j++){
                if (collection[i]['key']==collection[j]['key']){
                    this_count+=1;
                    count+=parseInt(collection[j]['count'],10)
                }
            }
            newarr.push({name:collection[i]['key'],summary:count})
            i+=this_count;        
        }
        console.log(newarr)
        return newarr;
    }    
    
}
