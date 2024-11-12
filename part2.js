// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to count columns of string
const countCol = (string) => {
  let columns = 1;
  for (let letter of string) {
    if (letter === ",") {
      columns++;
    } else if (letter === "\n") {
      break;
    }
  }
  return columns;
};

// Variable that stores number of columns
const colCount = countCol(str);

// const output = [];
// const row = [];
// let cell = "";
// let commaCount = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ",") {
//     // if "," is found
//     // 1. Add the cell to the row
//     // 2. Increment commaCount for the next add
//     // 3. Reset cell
//     row[commaCount] = cell;
//     commaCount++;
//     cell = "";
//     continue;
//   } else if (str[i] === "\n") {
//     // if "\n" is found
//     // 1. Add the 4th cell to the row
//     // 2. Create a copy of row and push into the output array
//     // 3. Reset commaCount and cell
//     row[commaCount] = cell;
//     output.push([...row]);
//     commaCount = 0;
//     cell = "";
//     continue;
//   } else if (i + 1 === str.length) {
//     // When iterate over to the last letter of string
//     // 1. Add last letter to the cell
//     // 2. Add the 4th cell to the row
//     // 3. Create a copy of row and push into the output array
//     commaCount++;
//     cell += str[i];
//     row[commaCount] = cell;
//     output.push([...row]);
//   }
//   cell += str[i];
// }

// console.log(output);
