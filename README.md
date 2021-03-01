# LOTIDE Javascript Library
 ## A recreation of Lodash Library pieces using JS fundamentals


### assertEqual
  * Reconstructing a version of console.assert to verify if two items are equal to one another. 
    * If passed, will output ``` `✅✅✅✅ Assertion Passed: ${actual} === ${expected}` ```
    * if Failed, will ouput ``` `🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}` ```

### head
  * function returning the first item of an array, or *head*   
    * Then utilized assertEqual to perform checks