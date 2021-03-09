const without = function (source, itemsToRemove) {
  let returnArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!(itemsToRemove.includes(source[i]))) {
      returnArray.push(source[i]);
    }
  }
  if (returnArray.length === 0) {
    return "You have removed all items";
  } else {
    return returnArray;
  }
};

module.exports = without;

