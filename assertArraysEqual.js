const assertArraysEqual = function (array1, array2) {
  let isEqual;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑 Assertion Failed: ${array1} !== ${array2} 🛑🛑`);
        isEqual = false;
        break;
      }

    }
    if (isEqual !== false) {
      console.log(`✅✅ Assertion Passed: ${array1} === ${array2} ✅ ✅ `);
    }
  } else {
    console.log(`🛑🛑 Assertion Failed: ${array1} !== ${array2} 🛑🛑`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([1, 2, 3], [1, 1, 2]);

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);