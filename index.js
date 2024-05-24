#!/usr/bin/env node
import inquirer from "inquirer";
// computer genrate rendom number
//user input gusseing Number
//compare user number and computer genrate number
let randomNumber = Math.floor(Math.random() * 6 + 1);
let answer = await inquirer.prompt([
    {
        name: "guessingNumber",
        type: "number",
        message: "please guess a Number between 1- 6:",
    }
]);
//using if and else
if (answer.guessingNumber === randomNumber) {
    console.log("congrats your guessingNumber is correct.");
}
else {
    console.log("you guessingNumber is wrong.");
}
