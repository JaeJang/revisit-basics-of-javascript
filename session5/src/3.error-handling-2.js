const a = 1;

try {
  console.log(a.toUpperCase());
} catch (e) {
  console.error(e);
}
console.log("Hello World");

try {
  console.log(a.toUpperCase());
} catch (e) {
  console.error(e);
} finally {
  console.log("Finally statement");
  console.log("this is executed regardless");
}

// use try catch  if and only if you have a meaningful way of handling them.

// Do catch an exception when you are expecting a failure in a specific part of your code, and if you have a fallback for it.

// Better not to use when an error is pre-determined, for example, an user input value is null or undefined. In that case, it maybe better to use
// conditional statements.

// Good practice to use try catch something you don't have controll with you and you want to deal with it or something not pre-determined like
// network connection issue, not able to open a file

// The above example is actaully not a good way to use try catch

// try not to use a single try catch for many lines of code. it will be hard to find what causes the exception

// Throw
try {
  throw "An error";
} catch (e) {
  console.error(e);
}

function convertMonth(monthNumber) {
  monthNumber -= 1;
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (months[monthNumber]) {
    return months[monthNumber];
  } else {
    throw "InvalidMonthNumber";
  }
}

try {
  const month = 1;
  const monthString = convertMonth(1);
  console.log(`It's ${monthString}`);
} catch (e) {
  console.error(e);
}

try {
  console.log(convertMonth(100));
} catch (e) {
  console.error(e);
}

throw new Error("Error stack");

// more details after class