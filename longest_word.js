function LongestWord(sentence){
   var sen = sentence.split(" ");
   sen.sort(function(a,b){
   	return b.length - a.length

   })
   return sen[0] + sen[0].length;
}