
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



/*
 QUnit.test( "a basic test example", function( assert ) {
var value = "hello";
assert.equal( value, "hello", "We expect value to be hello" );
});
*/