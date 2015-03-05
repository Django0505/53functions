
var assert = {
             num:0,
           pass:0,

         equals : function(ExpectedResult, Result){
         
          var TestGrid = document.createElement('div');

    TestGrid.id = "square"+this.num;
    TestGrid.style.height = "50px";
    TestGrid.style.width = "450px";
    TestGrid.style.border = "5px solid black";
    TestGrid.style.display = "inline-Block";

    document.body.appendChild(TestGrid);
           var rg = new RedOrGreen( TestGrid.id);
        

            if(Result === ExpectedResult ){
            TestGrid.innerHTML= "Passed";
              rg.makeGreen();
               this.pass++;
        
       }else if(Result !== ExpectedResult){   

          rg.makeRed();
         
          
          TestGrid.innerHTML="Failed";

             } 
                this.num++;
        var print = document.createElement('div');

          var printer= document.body.appendChild(print);
          printer.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.num;
}

};

var TestMyCode = {
     run : function(testName, testFunc){
            this.testName = testName;
          testFunc(assert);
            
    }

};

  
  /*
    function progress() {
  var print = document.createElement('div');

 var printer=document.body.appendChild(print);
  printer.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.num;
}
*/
