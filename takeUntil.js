const takeUntil = (array, callback) => {
  returnArray = [];
  for (item of array) {
    if (callback(item)) return returnArray;
    else returnArray.push(item);
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, x => x < 0));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);