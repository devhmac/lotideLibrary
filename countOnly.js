const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};


// loop through array
//loop through object keys
//if array[i] =  key && object.key *meaning key value* = true +1


const countOnly = function (allItems, itemsToCount) {
  const returnObj = {};

  for (let i = 0; i < allItems.length; i++) {
    //console.log('allItems[i]', allItems[i]);
    for (let key in itemsToCount) {
      //console.log('key', key);
      //console.log(itemsToCount[key])
      if (allItems[i] === key && itemsToCount[key]) {
        if (returnObj[key] === undefined) {
          returnObj[key] = 1;
        } else {
          returnObj[key] += 1;
        }
      }
    }
  }
  return returnObj;
};

console.log(countOnly(['a', 'a', 'b', 'c'], { a: true, b: true, c: false }))

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);