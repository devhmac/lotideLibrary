const assertArraysEqual = require("../assertArraysEqual");


console.log("----- AssertArraysEqual Test -----");

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([1, 2, 3], [1, 1, 2]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual(['hi', 'hello', 'shalom'], ['hi', 'hello', 'shalo']);
assertArraysEqual(['hi', 'hello', 'shalom'], ['hi', 'hello', 'shalom']);
