// Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.

const obj = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

const convertObjToCsv = (arr) => {
  // Extract the heading
  const headingArr = Object.keys(obj[0]);

  // Extract all values
  let valueArr = [];
  obj.forEach((person) => {
    const values = Object.values(person);
    valueArr.push(values);
  });

  // Join everything together
  const valuesStr = valueArr.join("\\n");
  const headingStr = headingArr.join(",") + "\\n";
  const str = headingStr + valuesStr;
  return str;
};

// Please uncomment the script tag in the index.html to see the result
console.log(convertObjToCsv(obj));
