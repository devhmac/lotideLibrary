// map functioning
const map = (array, callback) => {
  const results = [];
  for (item of array) {
    results.push(callback(item))
  }
  return results;
};

module.exports = map;