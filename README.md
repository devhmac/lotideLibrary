# LOTIDE Javascript Library
* ## A mini recreation of the [Lodash](https://lodash.com) library.
  * Built and published as project One of the Lighthouse Labs Bootcamp.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

<br>

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented,

## <ins>Tools:<ins> 
<br>

### assertEqual()
- Reconstructing a version of console.assert to verify if two items are equal to one another.
  - If passed, will output `` `✅✅✅✅ Assertion Passed: ${actual} === ${expected}` ``
  - if Failed, will ouput `` `🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}` ``

### eqArrays()
- compare arrays for equality, returning true/false if equal/not.

### assertArraysEqual()
- Utilizing eqArrays,outputting a console.log stating pass or fail based on whether or not arrays are equal. 

### eqObjects
- compare objects for equality, returning true/false if equal/not.

### assertObjectsEqual()
- Utilizing eqObjects,outputting a console.log stating pass or fail based on whether or not arrays are equal. 

### head()
- Function returning the first item of an array, or _head_
  - Then utilized assertEqual to perform checks

### middle()
- accepts array as argument, will return the middle element of array. If array is an even # of values, will return the middle two values.
  - return empty array if input only has one or two elements, as there is then no middle. 

### tail()
- Function takes array as argument, returns new array with all values but the head.

### without()
- input two arrays, *source* and *itemsToRemove*. Return an array containing source, without any matching items from the itemsToRemove array. 
  - Does not modify the original source array, returns a new once with the requested array elements removed.

### flatten()
- accepts an array input, which can include nested arrays and *flattens* them all into a single array, removing nesting. 
  - currently only supports 1 level of nesting.

### countLetters()
- accepts string as argument, outputs an object recording the # of times each character in said string occurs.

### letterPositions()
-accepts a string as argument. Will return an object with all characters in string, and that characters corresponding index in said string.

### countOnly()
- accepts an array and object as arguments. It will return an object containg counts of all array elements the input object listed as keys.
  - *NOTE it will only count property keys with a truthy value, if you wish to omit an element from the count, set that property key value to false. 

### findKeyByValue()
- accepts two arguments, object and value. It scans the object and return the first key which contains the given value. If no key with that given value is found, returns undefined.

### findKey()
- *higher order function* accepts object and callback function. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.

### map()
- *higher order function* Accepts array, and callback function as arguments. Map will return a new array based on results of callback.
  - EG. ```map([1, 2, 3, 4], num => num + 10)``` will return [11, 12, 13, 14].

### takeUntil()
- *higher order function* accepts array and callback as arguments. Will return a "slice" of the array starting from the beginning, until the callback provided returns a truthy value.
  - EG. ```takeUntil([2, 4, 6, 8, 9, 10, 11], num => num % 2 !== 0)``` will return [2, 4, 6, 8]