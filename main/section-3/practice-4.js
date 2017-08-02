'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var new_arr = new Array();
    var temp_arr =to_num(collectionA,new_arr);
    return compare_arr(temp_arr,objectB);
    
    
   
   
   function to_num(collectionA,new_arr){
       for(var i=0;i<collectionA.length;){
           if (collectionA[i].length>1) {
        	   var this_value = parseInt(collectionA[i].replace(/[^0-9]/ig,"")); 
        	   var this_key = collectionA[i].replace(/[^a-z]/ig,"");
        	   new_arr.push({key:this_key,count:this_value});
        	   collectionA.splice(i,1);
	       }else{
	           var this_count=0;   
               for(var j=i;j<collectionA.length;j++){
                   if (collectionA[i]==collectionA[j]){
                        this_count+=1;
                    }
                }
                new_arr.push({key:collectionA[i],count:this_count})
                i+=this_count;        
            }
            
                 
	   }
	   //console.log(new_arr);
	   return new_arr;
   }
   
   function compare_arr(arr,objectB){
      
       for(var i = 0;i<arr.length;i++){
           for(var j=0;j<objectB['value'].length;j++){
               if(arr[i]['key']==objectB['value'][j]){
                   arr[i]['count']=arr[i]['count']-parseInt(arr[i]['count']/3)
               }
           }
       }
       return arr;
       
   }

             
  
   
   
   
   



    	
    	

}
