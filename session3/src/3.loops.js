// without loop

// if we want to add 0 to 10 using the sum function

function sum(a, b = 0) {
  return a + b;
}

let result = sum(0, 1);
result = sum(1, 2);
result = sum(result, 3);
result = sum(result, 4);
result = sum(result, 5);
result = sum(result, 6);
result = sum(result, 7);
result = sum(result, 8);
result = sum(result, 9);
result = sum(result, 10);

console.log(result);

result = 0;
for (let i = 1; i < 11; ++i) {
  result = sum(result, i);
}
console.log(result);

// for statement
/*
for({initial}; {condition}; {increment}){
    {initial} - only executed for the first time
    {condition} - evaluated when the block is done 
    {increment} - executed when the condition is true
}
*/

for (let i = 0; i < 5; ++i) {
  console.log(i);
}
// console.log(i);

for (let i = 10; i > 5; --i) {
  console.log(i);
}

for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
}

for (let i = 0; i < 5; ++i) {
  console.log(i);
}

let i = 0;
for (; i < 3; ++i) {
  console.log("Hello");
}
console.log(i);

// from 0 to ten, print even numbers

// while
/*
while(condition) {
    the condition is evaluated when the block is done
}
*/

let x = 0;
while (x < 3) {
  console.log(i);
  ++x;
}

// do while
/*
do{
    statement
} while(condition)

statement block is executed first and the condition is evaluated
*/

let y = 0;
do {
  console.log("Hello Do While");
  ++y;
} while (y < 0);

// break
for (let i = 0; i < 10; ++i) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

for (let i = 0; i < 10; ++i) {
  console.log(i);
  break;
}

let hitFive = false;
let z = 0;
while (!hitFive) {
  if (z === 5) {
    console.log("DONE");
    break;
    // or
    // hitFive = true
  } else {
    console.log("Not Yet");
  }
  ++z;
}

// continue
for (let i = 0; i < 10; ++i) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(`${i} is not multiples of three`);
}


// label
x = 0;
z = 0;
outerLlop: 
while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 3 && x === 3) {
      break outerLlop;
    } else if (z === 3) {
      break;
    }
  }
}
