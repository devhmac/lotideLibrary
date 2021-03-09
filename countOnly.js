const countOnly = function (allItems, itemsToCount) {
  const returnObj = {};

  for (let i = 0; i < allItems.length; i++) {
    //console.log('allItems[i]', allItems[i]);
    for (let key in itemsToCount) {
      //console.log('key', key);
      //console.log(itemsToCount[key])
      if (allItems[i] === key && itemsToCount[key]) {
        if (returnObj[key] === undefined) {
          returnObj[key] = 1;
        } else {
          returnObj[key] += 1;
        }
      }
    }
  }
  return returnObj;
};

module.exports = countOnly;