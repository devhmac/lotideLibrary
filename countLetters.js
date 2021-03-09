const countLetters = function (string) {
  returnObj = {}
  for (let letter of string) {
    if (letter !== ' ') {
      if (!returnObj[letter]) {
        returnObj[letter] = 1;
      } else {
        returnObj[letter] += 1;
      }
    }
  }
  return returnObj;
};

module.exports = countLetters;


