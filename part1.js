// Revisit your code from ALAB 308.3.1 and refactor the code

let str =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

const output = [];
const row = {};
let cell = "";
// Use commaCount as properties of the row
let commaCount = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === ",") {
    // if "," is found
    // 1. Add the cell to the row
    // 2. Reset cell
    commaCount++;
    row[commaCount] = cell;
    cell = "";
    continue;
  } else if (str[i] === "\n") {
    // if "\n" is found
    // 1. Add the 4th cell to the row
    // 2. Create a copy of row and push into the output array
    // 3. Reset commaCount and cell
    commaCount++;
    row[commaCount] = cell;
    output.push({ ...row });
    commaCount = 0;
    cell = "";
    continue;
  } else if (i + 1 === str.length) {
    // When iterate over to the last letter of string
    // 1. Add last letter to the cell
    // 2. Add the 4th cell to the row
    // 3. Create a copy of row and push into the output array
    commaCount++;
    cell += str[i];
    row[commaCount] = cell;
    output.push({ ...row });
  }
  cell += str[i];
}

const printOutput = () => {
  output.forEach((obj) => {
    const eachRow = Object.values(obj);
    console.log(eachRow.join(" "));
  });
};

// Please uncomment the script tag in the index.html to see the result
printOutput();
