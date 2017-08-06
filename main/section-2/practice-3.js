'use strict';
function split(item){
//      let {key,value};
      
      if(item.includes('-')){
            let splited = item.split('-')
//            console.log({key:splited[0],value:parseInt(splited[1],10)})
            return {key:splited[0],value:parseInt(splited[1],10)}
      }
      if(item.includes(':')){
            let splited = item.split(':')
//            console.log({key:splited[0],value:parseInt(splited[1],10)})
            return {key:splited[0],value:parseInt(splited[1],10)}
      }
      if(item.includes('[')){
            let key = item.charAt(0);
            let value = parseInt(item.substr(2,item.length-1));
//            console.log({key,value})
            return {key,value}
      }
}

function push(result,key,value){
      for(let i = 0;i<value;i++){
            result.push(key);
      }
}

function expand(collection){
      var result = [];
      for(let item of collection){
            if (item.length ==1){
                  result.push(item)
            }else{
                  let {key,value} = split(item)
                  push(result,key,value)
            }
      }
      return result;
}

function summarize(collection){
      let new_arr=[];
      for(let i of collection){
            var obj = find(new_arr,i);
            if(obj){
                  obj.summary++;
            }else{
                  new_arr.push({name:i,summary:1})
            }
      }
      return new_arr;
}

function find(collection,i){
      for(let item of collection){
            if(i==item.name){
                  return item
            }
      }
      return false;
}

module.exports = function countSameElements(collection) {
    let expanded = expand(collection)
    console.log(summarize(expanded))
    return summarize(expanded)  
}
