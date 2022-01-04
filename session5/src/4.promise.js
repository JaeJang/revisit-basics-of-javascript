/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

What is asynchronous.
You do your job after me, I will finish later
Functions running in parallel with other functions are called asynchronous
*/

// asynchronous example
console.log("Start");
setTimeout(() => {
  console.log("Inside timeout");
}, 1000);
console.log("Done");

import fs from "fs";

console.log("Before the file");
fs.readFile("promise.txt", (err, data) => {
  console.log(data.toString());
});
console.log("After the file");

// asynchronous is normally used for something that takes time, such as DB work, network connection, file reading, etc

import axios from "axios";

console.log("Before promise");
// promise callbacks
axios
  .get("https://random-data-api.com/api/stripe/random_stripe")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    if (err.response) {
      console.error(err.response.data);
    } else {
      console.error(err);
    }
  })
  .finally(() => {
    console.log("Finally statement from after the promise");
  });
  console.log("After promise");