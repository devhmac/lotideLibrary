//function returing all elements but head of an array
const tail = function (array) {
  let arrayTail = array.slice(1);
  return arrayTail;
};


module.exports = tail;


