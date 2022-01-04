/**
 * 1. Log tranactions - create two history arrays for each account and push a transaction object
 *                      Transaction object {
 *                          type: DEPOSIT or WITHDRAWAL,
 *                          amount: x.yy format,
 *                          balance: remaining balance
 *                      }
 * 2. Add an option to the main menu - View History
 */

import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

const OPTIONS = Object.freeze({
  DEPOSIT: "1",
  WITHDRAWAL: "2",
  BAL_CHECK: "3",
  VIEW_HISTORY: "4",
  SELECT_ACC: "5",
  EXIT: "6",
});

const TRANSACTION_TYPE = Object.freeze({
  DEPOSIT: "DEPOSIT",
  WITHDRAWAL: "WITHDRAWAL",
});

const ACCOUNT = Object.freeze({
  CHECKING: "1",
  SAVING: "2",
});

let checkingBal = 100;
let savingBal = 50;

const history = Object.freeze({
  [ACCOUNT.CHECKING]: [],
  [ACCOUNT.SAVING]: [],
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

function deposit(amount, account) {
  if (account === ACCOUNT.CHECKING) {
    checkingBal += amount;
    history[account].push({
      type: TRANSACTION_TYPE.DEPOSIT,
      amount: amount.toFixed(2),
      balance: checkingBal.toFixed(2),
    });
  } else {
    savingBal += amount;
    history[account].push({ type: TRANSACTION_TYPE.DEPOSIT, amount: amount.toFixed(2), balance: savingBal.toFixed(2) });
  }
}

function withdraw(amount, account) {
  if (account === ACCOUNT.CHECKING && amount <= checkingBal) {
    checkingBal -= amount;
    history[account].push({ type: TRANSACTION_TYPE.WITHDRAWAL, amount, balance: checkingBal });
  } else if (account === ACCOUNT.SAVING && amount <= savingBal) {
    savingBal -= amount;
    history[account].push({ type: TRANSACTION_TYPE.WITHDRAWAL, amount, balance: savingBal });
  } else {
    console.log("Not enough fund");
  }
}

function balanceCheck(account) {
  if (account === ACCOUNT.CHECKING) {
    console.log(`Checking Account Balance: $${checkingBal}`);
  } else {
    console.log(`Saving Account Balance: $${savingBal}`);
  }
}

function viewHistory(account) {
  let historyForAccount = history[account];
  for (let transaction of historyForAccount) {
    console.log(transaction);
  }
}
