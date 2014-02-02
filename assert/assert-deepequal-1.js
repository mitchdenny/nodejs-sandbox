var instance1 = {field1: "value1", field2: "value2"};
var instance2 = {field1: "value1", field2: "value2"};

var assert = require("assert");
assert.deepEqual(instance1, instance2, "This message shouldn't be displayed.");
