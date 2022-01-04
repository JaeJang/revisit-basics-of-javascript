/**
 * 1. Keep showing the main menu with a loop until a user selects the Exit option.
 * 2. Add a new option - Select Account
 * 3. Add a new option - Balance Check
 * 4. Create functions - These listed functions are must. You can have more functions if necessary
 *                        a. selectAccount - selects account between checking and saving
 *                        b. selectMainOption - prompt an action from user
 *                        c. deposit - deposit based on the selected account
 *                        d. withdrawal - withdraw based on the selected account
 *                        e. balanceCheck - print the selected account balance
 * 
 */
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

const DEPOSIT = "1";
const WITHDRAWAL = "2";
const BAL_CHECK = "3";
const SELECT_ACC = "4";
const EXIT = "5";

const CHECKING = "1";
const SAVING = "2";

let checkingBal = 100;
let savingBal = 50;

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
    case DEPOSIT:
      deposit(getAmount(), selectedAcc);
      break;
    case WITHDRAWAL:
      withdraw(getAmount(), selectedAcc);
      break;
    case BAL_CHECK:
      balanceCheck(selectedAcc);
      break;
    case SELECT_ACC:
      selectedAcc = selectAccount();
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

  if (selected !== CHECKING && selected !== SAVING) {
    return CHECKING;
  }

  return selected;
}

function selectMainOption() {
  console.log(`
1. Deposit
2. Withdrawal
3. Balance Check
4. Select Account
5. Exit`);
  const action = prompt();

  if (action !== DEPOSIT && action !== WITHDRAWAL && action !== EXIT && action !== BAL_CHECK && action !== SELECT_ACC) {
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
  if (account === CHECKING) {
    checkingBal += amount;
  } else {
    savingBal += amount;
  }
}

function withdraw(amount, account) {
  if (account === CHECKING && amount <= checkingBal) {
    checkingBal -= amount;
  } else if (account === SAVING && amount <= savingBal) {
    savingBal -= amount;
  } else {
    console.log("Not enough fund");
  }
}

function balanceCheck(account) {
  if (account === CHECKING) {
    console.log(`Checking Account Balance: $${checkingBal}`);
  } else {
    console.log(`Saving Account Balance: $${savingBal}`);
  }
}
