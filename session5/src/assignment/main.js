/**
 * 1. Seperate files - main file has to have only variables and functions which are related to menu options
 * 2. Add Date property in the transaction object which is pushed to the history array
 * 3. Error handling is optional
 */

import promptSync from "prompt-sync";
import { ACCOUNT, balanceCheck, deposit, viewHistory, withdraw } from "./account.js";

const prompt = promptSync({ sigint: true });

const OPTIONS = Object.freeze({
  DEPOSIT: "1",
  WITHDRAWAL: "2",
  BAL_CHECK: "3",
  VIEW_HISTORY: "4",
  SELECT_ACC: "5",
  EXIT: "6",
});

console.log("Welcome to the Jas's ATM");
console.log("Please select one of the following options");

let selectedAcc = selectAccount();
let isRunning = true;

while (isRunning) {
  const option = selectMainOption();

  if (!option) {
    console.log("Invalid input. Please try again");
    continue;
  }
  switch (option) {
    case OPTIONS.DEPOSIT:
      deposit(getAmount(), selectedAcc);
      break;
    case OPTIONS.WITHDRAWAL:
      withdraw(getAmount(), selectedAcc);
      break;
    case OPTIONS.BAL_CHECK:
      balanceCheck(selectedAcc);
      break;
    case OPTIONS.SELECT_ACC:
      selectedAcc = selectAccount();
      break;
    case OPTIONS.VIEW_HISTORY:
      viewHistory(selectedAcc);
      break;
    default:
      console.log("Thank you for using Jae's ATM");
      isRunning = false;
  }
}

function selectAccount() {
  console.log(`
  1. Checking Account
  2. Saving Account`);
  const selected = prompt();

  if (!Object.values(ACCOUNT).includes(selected)) {
    return ACCOUNT.CHECKING;
  }

  return selected;
}

function selectMainOption() {
  console.log(`
1. Deposit
2. Withdrawal
3. Balance Check
4. View History
5. Select Account
6. Exit`);
  const action = prompt();

  if (!Object.values(OPTIONS).includes(action)) {
    return null;
  }
  return action;
}

function getAmount() {
  while (true) {
    const amount = parseFloat(prompt(`Please enter amount: `));

    if (isNaN(amount) || amount <= 0) {
      console.log("Invalid input. Please try again");
    } else {
      return amount;
    }
  }
}
