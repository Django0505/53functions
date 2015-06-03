
QUnit.test("testing hello world function", function(assert){
    var value = helloWorld();
    // is the result as we expected?
    assert.equal(value,"hello world!","We expect value to be hello world!" );
             
});
QUnit.test("testing upperCase function", function(assert){
    var value = upperCase("joe");
    // is the result as we expected?
    assert.equal(value,"hello JOE!","We expect value to be hello JOE!" );

});
QUnit.test("testing hello_joe function", function(assert){
    var value = hello_joe("Joe");
    // is the result as we expected?
    assert.equal(value, "Hello!","We expect value to be hello!" );

});
QUnit.test("testing numList function", function(assert){
    var value = numList(1);
    // is the result as we expected?
    assert.strictEqual(value, 1,"We expect value to be 5" );

});

QUnit.test("testing sumList function", function(assert){
    var value = sumList(5);
    // is the result as we expected?
    assert.equal(value, 15,"We expect value to be 15" );

});
QUnit.test("testing stringLen function", function(assert){
    var value = stringLen("amagwinya");
    // is the result as we expected?
    assert.equal(value, 9,"We expect value to be 9" );

});
QUnit.test("testing Upper function", function(assert){
    var value = Upper("amagwinya");
    // is the result as we expected?
    assert.equal(value, "AMAGWINYA","We expect value to be AMAGWINYA" );

});
QUnit.test("testing Upper function", function(assert){
    var value = Reverse("Tom is here");
    // is the result as we expected?
    assert.equal(value, "here is Tom","We expect value to be here is Tom " );

});
QUnit.test("testing helloList function", function(assert){
    var value = helloList(3);
    // is the result as we expected?
    assert.deepEqual(value, ["hello world","hello world","hello world","hello world"],"We expect value to be hello world printed the number of times the number given" );

});
QUnit.test("testing highLow function", function(assert){
    var value = highLow([1,2,3,4,5]);
    // is the result as we expected?
    assert.deepEqual(value,[1,5],"We expect value to be 1 and 5 " );

});
QUnit.test("testing NumOfWords function", function(assert){
    var value = NumOfWords("Tom is here");
    // is the result as we expected?
    assert.equal(value, 3,"We expect value to be 3 " );

});
QUnit.test("testing SumOfWords function", function(assert){
    var value = SumOfWords("Tom is here");
    // is the result as we expected?
    assert.equal(value, 9,"We expect value to be 9 " );

});
QUnit.test("testing LongestWord function", function(assert){
    var value = LongestWord("Tom is here");
    // is the result as we expected?
    assert.equal(value, "here 4","We expect value to be here 4" );

});
QUnit.test("testing ShortestWord function", function(assert){
    var value = ShortestWord("Tom is here");
    // is the result as we expected?
    assert.equal(value, "is 2","We expect value to be is 2" );

});


/*
 QUnit.test( "a basic test example", function( assert ) {
var value = "hello";
assert.equal( value, "hello", "We expect value to be hello" );
});
*/