// Part 1 Fizz Buzz

for (let i = 1; i <= 100; i++) {
  console.log(
    `${i % 3 === 0 ? "Fizz " : ""}` + `${i % 5 === 0 ? "Buzz " : ""}` || i
  );
}

// Part 2 Prime Time

let n = 977;
let nextNum = n + 1;
while (true) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(nextNum); i++) {
    if (nextNum % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(nextNum);
    break;
  }

  nextNum++;
}

//  Part 3 Feeling Loopy

let str =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// let str =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell = "";
let row = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === ",") {
    row.push(cell);
    cell = "";
    continue;
  } else if (str[i] === "\n") {
    row.push(cell);
    console.log(row.join(", "));
    row = [];
    cell = "";
    continue;
  } else if (i + 1 === str.length) {
    cell += str[i];
    row.push(cell);
    console.log(row.join(", "));
  }

  cell += str[i];
}

// Please uncomment the script tag in the index.html to see the result
