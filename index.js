#! /usr/bin/env node
import inquirer from "inquirer";
// 1)computer will generate a random number-Done
// 2)user give input for guessing number
// 3)compare user input with computer generated number and show result
const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
}
else {
    console.log("You guessed a wrong number.");
}
