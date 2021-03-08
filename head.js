const assertEqual = require('./assertEqual');

//function to return the *head* or first element of an array
const head = function (array) {
  return array[0];
};



assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined)
assertEqual(head([1]), 1)