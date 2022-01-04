import { Transaction } from "./transaction.js";
import TRANSACTION_TYPE from "./transactionType.js";

export const ACCOUNT = Object.freeze({
  CHECKING: "1",
  SAVING: "2",
});

export const history = Object.freeze({
  [ACCOUNT.CHECKING]: [],
  [ACCOUNT.SAVING]: [],
});

export const accountBal = {
  [ACCOUNT.CHECKING]: 0,
  [ACCOUNT.SAVING]: 0,
};

export function deposit(amount, account) {
  const addedAmount = accountBal[account] + amount;
  accountBal[account] = addedAmount;
  history[account].push(new Transaction(TRANSACTION_TYPE.DEPOSIT, amount, addedAmount));
}

export function withdraw(amount, account) {
  const currentAccBal = accountBal[account];
  if (amount <= currentAccBal) {
    const substracted = currentAccBal - amount;
    accountBal[account] = substracted;
    history[account].push(new Transaction(TRANSACTION_TYPE.WITHDRAWAL, amount, substracted));
  } else {
    console.log("Not enough fund");
  }
}

export function balanceCheck(account) {
  if (account === ACCOUNT.CHECKING) {
    console.log(`Checking Account Balance: $${accountBal[ACCOUNT.CHECKING]}`);
  } else {
    console.log(`Saving Account Balance: $${accountBal[ACCOUNT.SAVING]}`);
  }
}

export function viewHistory(account) {
  console.log();
  let historyForAccount = history[account];
  for (let i = historyForAccount.length - 1; i >= 0; --i) {
    console.log(`${i + 1}. ${historyForAccount[i].toString()}`);
  }
}
