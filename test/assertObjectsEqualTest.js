const assertObjectsEqual = require('../assertObjectsEqual');


//testing!
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const dd = { d: ["2", 3], c: ["1"] };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, dd);
assertObjectsEqual(cd2, cd2);