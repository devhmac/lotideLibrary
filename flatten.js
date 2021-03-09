const flatten = function (array) {
  let flatArray = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      let childArr = flatten(item);
      for (let nested of childArr) {
        flatArray.push(nested)
      }
    } else {
      flatArray.push(item)
    }

  }

  return flatArray;
}

console.log(flatten([1, 2, [3, ['a'], 4], 5, 6]))
// what we want [1,2,3,4,5,6]



module.exports = flatten;


