

//MIDDLE FUNCTION!

const middle = function (array) {
  let midArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midArray.push(array[midIndex - 1], array[midIndex]);
    } else {
      midArray.push(array[midIndex]);
    }
  }
  return midArray;
};

module.exports = middle;