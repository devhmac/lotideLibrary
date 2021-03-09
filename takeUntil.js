//takeUntil function

const takeUntil = (array, callback) => {
  returnArray = [];
  for (item of array) {
    if (callback(item)) return returnArray;
    else returnArray.push(item);
  }
};

module.exports = takeUntil;

