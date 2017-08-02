'use strict';

module.exports = function countSameElements(collection) {
    
    var new_arr=[];
    for(var i=0;i<collection.length;){
           if (collection[i].length>1) {
        	   var this_value = parseInt(collection[i].replace(/[^0-9]/ig,"")); 
        	   var this_key = collection[i].replace(/[^a-z]/ig,"");
        	   new_arr.push({key:this_key,count:this_value});
        	   collection.splice(i,1);
	       }else{
	           var this_count=0;   
               for(var j=i;j<collection.length;j++){
                   if (collection[i]==collection[j]){
                        this_count+=1;
                    }
                }
                new_arr.push({key:collection[i],count:this_count})
                i+=this_count;        
            }
            
                 
	   }
	   //console.log(new_arr);
	   return new_arr;
   }



