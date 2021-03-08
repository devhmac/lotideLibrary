const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ["hello", "lighthoues", "labs"];

tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);