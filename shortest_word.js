function ShortestWord(sentence){
   var sen = sentence.split(" ");
   sen.sort(function(a,b){
   	return a.length - b.length

   })
   return sen[0] +" "+ sen[0].length;
}