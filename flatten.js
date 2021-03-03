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
  console.log(flatArray)
}

flatten([[1, 2, 3], 4, 5, [6, 7]])
flatten([1, 2, [3, 4], 5, [6]])
flatten([1, 'hello', ['im', 'nested'], 2, 3])
