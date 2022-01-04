// process.exit()
// isNaN()
// prompt()
// parseInt
// parseFloat()

import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

const DEPOSIT = "1";
const WITHDRAWAL = "2";
const EXIT = "3";

const CHECKING = "1";
const SAVING = "2";

let checkingBal = 100;
let savingBal = 50;

console.log("Welcome to the Jas's ATM");
console.log("Please select one of the following options");

console.log(`
1. Checking Account
2. Saving Account`);
const selectedAcc = prompt();

if (selectedAcc !== CHECKING && selectedAcc !== SAVING) {
  console.log("Invalid input. Please try again later");
  process.exit();
}

console.log(`
1. Deposit
2. Withdrawal
3. Exit`);
const action = prompt();

if (action !== DEPOSIT && action !== WITHDRAWAL && action !== EXIT) {
  console.log("Invalid input. Please try again later");
  process.exit();
}

if (action === EXIT) {
  console.log("Thank you for using Jae's ATM");
  process.exit();
}

const amount = parseFloat(prompt(`Please enter amount: `));

if (isNaN(amount)) {
  console.log("Invalid input. Please try again later");
  process.exit();
}

if (action === DEPOSIT) {
  if (selectedAcc === CHECKING) {
    checkingBal += amount;
  } else {
    savingBal += amount;
  }
} else {
  if (selectedAcc === CHECKING) {
    checkingBal -= amount;
  } else {
    savingBal -= amount;
  }
}

console.log();
console.log(`Checking Account Balance: ${checkingBal}`);
console.log(`Saving Account Balance: ${savingBal}`);
console.log("Thank you for using Jae's ATM");
