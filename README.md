# LOTIDE Javascript Library

## A recreation of Lodash-like Library tools using JS fundamentals


## <ins>Tools<ins> 

### assertEqual()

- Reconstructing a version of console.assert to verify if two items are equal to one another.
  - If passed, will output `` `✅✅✅✅ Assertion Passed: ${actual} === ${expected}` ``
  - if Failed, will ouput `` `🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}` ``

### head()

- Function returning the first item of an array, or _head_
  - Then utilized assertEqual to perform checks

### tail()

- Function takes array as argument, returns new array with all values but the head.

### eqArrays()
- compare arrays for equality, returning true/false, I check for any differences; if they exist, return false and if none exist, eqArrays returns true.

### assertArraysEqual()
- Similar to assertEqual outputting a console.log stating pass or fail based on whether or not arrays are equal. 
  - Without a return function, had to reconfigure the eqArrays code to include conditional logic on outputting pass message. 

### without()
- input two arrays, *source* and *itemsToRemove*. Return an array containing source, without any matching items from the itemsToRemove array. 
  - Does not modify the original source array, just returns a new once with the requested array elements removed.

### flatten()
- takes an array input, which can include nested arrays and *flattens* them all into a single array, removing nesting. 
  - currently only working with 1 level of nesting.