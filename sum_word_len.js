function SumOfWords(sentence){

	var sen = sentence.split(" ");
   var words = sen.join("").replace(/[^a-zA-Z]/g,"").length;
  
   return words;
}
