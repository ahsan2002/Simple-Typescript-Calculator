#! /usr/bin/env node
import { sum, sub, mul, div } from "./operations.js";
import inquirer from "inquirer";


// let a: number=5
// let b: number=10;

let result =
    await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter your First Number:"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your Second Number:"
        },
        {
            name: "operator",
            type: "list",
            message: "Select which operation you want to perform.:",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },

    ]);

if (result.operator === "Addition") {
    console.log("The Addition of your numbers is", sum(result.num1, result.num2));
}

else if (result.operator === "Subtraction") {
    console.log("The Subtraction of your numbers is", sub(result.num1, result.num2));
}

else if (result.operator === "Multiplication") {
    console.log("The Multiplication of your numbers is", mul(result.num1, result.num2));
}

else if (result.operator === "Division") {
    console.log("The Division of your numbers is", div(result.num1, result.num2));
}
