const words = ["ground", "control", "to", "major", "tom"];



const map = (array, callback) => {

  const results = [];

  for (item of array) {
    results.push(callback(item))
  }




  return results;
};

const results1 = map(words, word => word[0]);

console.log(results1)