
TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world!", result);

});
TestMyCode.run("testing upperCase function", function(assert){
    var result = upperCase("joe");
    // is the result as we expected?
    assert.equals("hello JOE!", result);

});
TestMyCode.run("testing hello_joe function", function(assert){
    var result = hello_joe("Joe");
    // is the result as we expected?
    assert.equals("Hello!", result);

});
TestMyCode.run("testing numList function", function(assert){
    var result = numList(1);
    // is the result as we expected?
    assert.equals(1, result);

});
TestMyCode.run("testing sumList function", function(assert){
    var result = sumList(5);
    // is the result as we expected?
    assert.equals(15, result);

});

