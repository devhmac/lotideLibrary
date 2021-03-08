
// pseudo code
// are arrays the same length, if no, already false
//if they are same length, loop through
// if arr1[i] !== arr2[i] then we fail
// if no fails are triggered we should be good!

const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;