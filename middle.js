//if array.length = odd - array.length % 2 !== 0
//Math.floor(array.length/2)

const middle = function (array) {
  let midArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midArray.push(array[midIndex - 1], array[midIndex])
    } else {
      midArray.push(array[midIndex]);
    }
  }
  return midArray;
}

console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 3, 4]))