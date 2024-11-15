// Part 4: Sorting and Manipulating Data

// Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// 1. Remove the last element from the sorted array.

const output = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
];

output.pop();

// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

output.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

// 3. Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

output.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// console.log(output);

// 4. Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop

let totalAge = 0;
output.forEach((obj) => {
  totalAge += Number(obj.age);
});
const aveAge = totalAge / output.length;
// console.log(aveAge);
