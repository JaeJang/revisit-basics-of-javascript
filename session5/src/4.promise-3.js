// async - await
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// async function returns promise
// when there is a awiat keyword in front of an asynchronous function call, it is wating to the function be completed and return a value or throw an error

function firstPromise(value) {
  return new Promise((resolve, reject) => {
    if (isNaN(parseFloat(value))) {
      reject("It's not a number");
    } else {
      if (value && value % 2 === 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    }
  });
}

function normalAsyncCall(value) {
  return new Promise((resolve, reject) => {
    console.log("Starting the async call");
    firstPromise(value)
      .then((result) => {
        console.log(`Here is the result: ${result}`);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

normalAsyncCall(123).then((result) => console.log(`Final result from normal promise: ${result}`));

async function firstAsyncCall(value) {
  console.log("Starting the async call");
  const result = await firstPromise(value);
  console.log(`Here is the result: ${result}`);
  return result;
}

const firstResultFromAsyncFunc = await firstAsyncCall(123);
console.log(`First final result from Async Func: ${firstResultFromAsyncFunc}`);

async function secondAsyncCall(value) {
  console.log("Starting the async call");
  try {
    // waiting the firstPromise promise function to resolve a value
    const result = await firstPromise(value);
    console.log(`Here is the result: ${result}`);
    return result;
  } catch (err) {
    console.error(err);
    return false;
  }
}

const secondResultFromAsyncFunc = await secondAsyncCall("hello");
console.log(`Second final result from Async Func: ${firstResultFromAsyncFunc}`);

// since async function returns a promise, we can also use then catch without the await keyword
secondAsyncCall("123").then((result) => {
  console.log(`Third final result from Async Func: ${result}`);
});

async function thirdAsyncCall(value) {
  console.log("Starting the async call");
  try {
    const result = await firstPromise(value);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

try {
  const forthResultFromAsyncFunc = await thirdAsyncCall("hello");
  console.log(`Second final result from Async Func: ${forthResultFromAsyncFunc}`);
} catch (err) {
  console.error(`Error on the forth call: ${err}`);
}

// since async function returns a promise, we can also use then catch without the await keyword
thirdAsyncCall("hello")
  .then((result) => {
    console.log(`Forth final result from Async Func: ${result}`);
  })
  .catch((err) => {
    console.error(`Error on the forth call: ${err}`);
  });
