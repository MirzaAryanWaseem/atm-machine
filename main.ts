#! /usr/bin/env node


import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 5678;

let pinAns = await inquirer.prompt([
  {
    name: "pinNumber",
    message: "Enter Your Pin",
    type: "number",
  },
]);
if (pinAns.pinNumber === myPin) {
  let answer = await inquirer.prompt([
    {
      name: "option",
      message: "Enter Your option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (answer.option === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Select Any option to withdraw",
        type: "list",
        choices: [1000, 3000, 5000, 10000, 20000],
      },
    ]);

    if (myBalance < amountAns.amount) {
      console.log(`You have insufficient balance`);
    } else {
      myBalance -= amountAns.amount;
      console.log(`your remaining balance is: ${myBalance}`);
    }
  } else if (answer.option === "check balance") {
    console.log(myBalance);
  }
} else {
  console.log("your pin is incorrect");
}
