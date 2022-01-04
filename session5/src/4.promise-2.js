function firstPromise(value) {
  return new Promise((resolve, reject) => {
    if (value && value % 2 === 0) {
      resolve("It's an even number");
    } else {
      reject("It's an odd number");
    }
  });
}

console.log("Start of the first");
firstPromise(2)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
console.log("End of the first");

function secondPromise(value) {
  return new Promise((resolve, reject) => {
    firstPromise(value)
      .then((result) => {
        resolve(result);
        console.log("fristPromise call succeed");
      })
      .catch((err) => {
        reject(err);
      });
  });
}

console.log("Start of the second");
secondPromise(1)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
console.log("End of the second");
