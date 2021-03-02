const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};

// pseudo code
// loop through both arrays - nested
// compare array1[i] to array2[j]
// if === then true

const equalArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      console.log('arr 1 :', array1[i]);
      console.log('arr 2 :', array2[i]);
      if (array1[i] !== array2[i]) {
        console.log(`Index ${i} does not match array1 = ${array1[i]}, array 2 = ${array2[i]}`);
        return false;
      }
    }
  } else {
    console.log('Arrays are not the same length')
    return false;
  }

}

console.log(equalArrays([1, 2, 4,], [1, 2, 3]))