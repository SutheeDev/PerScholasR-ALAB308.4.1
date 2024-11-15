// Implement the following:
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const output = [];

// EXtract the heading and turn them into lowercase
const strArr = str.split("\n");
const allHeading = strArr.shift().split(",");
// Convert all heading to lowercase
const heading = allHeading.map((heading) => {
  return heading.toLowerCase();
});

// Iterate through the rest of the string
strArr.forEach((rowStr) => {
  const valueArr = rowStr.split(",");
  let rowObj = {};
  // Match keys and values
  for (let j = 0; j < valueArr.length; j++) {
    rowObj[heading[j]] = valueArr[j];
  }
  // Add each row of object to the output
  output.push(rowObj);
});

// Please uncomment the script tag in the index.html to see the result
console.log(output);
