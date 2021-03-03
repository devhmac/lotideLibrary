# LOTIDE Javascript Library

## A recreation of Lodash-like Library tools using JS fundamentals


## <ins>Tools<ins> 

### assertEqual

- Reconstructing a version of console.assert to verify if two items are equal to one another.
  - If passed, will output `` `✅✅✅✅ Assertion Passed: ${actual} === ${expected}` ``
  - if Failed, will ouput `` `🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}` ``

### head

- Function returning the first item of an array, or _head_
  - Then utilized assertEqual to perform checks

### tail

- Function takes array as argument, returns new array with all values but the head.

### eqArrays
- compare arrays for equality, return true if arrays are equal, return false if there are any differences.

