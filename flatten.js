const flatten = function (array) {
  let flatArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let item of array[i]) {
        flatArray.push(item);
      }
    } else {
      flatArray.push(array[i]);
    }

  }
  return flatArray;
}

module.exports = flatten;


