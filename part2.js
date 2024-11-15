// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const output = [];

// Function to count columns of string
const countCol = (string) => {
  let columns = 1;
  for (const letter of string) {
    if (letter === ",") {
      columns++;
    } else if (letter === "\n") {
      break;
    }
  }
  return columns;
};

// Function to add row to the output
const addRowToOutput = (string, columns) => {
  const result = [];
  let word = "";
  let count = 0;

  const rowCharArr = string.split("");

  while (count < columns) {
    let char = rowCharArr.shift();
    if (char === ",") {
      result.push(word);
      word = "";
      count++;
    } else if (rowCharArr.length === 0) {
      word += char;
      result.push(word);
      count++;
    } else {
      word += char;
    }
  }
  output.push(result);
};

const convertCSV = (csvStr) => {
  // Variable that stores number of columns
  const colCount = countCol(csvStr);

  const strArr = csvStr.split("\n");

  for (let i = 0; i < strArr.length; i++) {
    addRowToOutput(strArr[i], colCount);
  }
  return output;
};

// console.log(convertCSV(str));
