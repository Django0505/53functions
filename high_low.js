function highLow(array){
  var list = array.sort(function(a,b){return b - a;});
  var HiLo=[];
 HiLo.push(list[list.length-1]);
  HiLo.push(list[0]);
  return HiLo
    }