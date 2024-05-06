#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//input enter num:3
//input operator:{+,-,*,/}
//input enter num:4
//input operator:{+,-,*,/}
//input enter num:5
//input equal:{=}
//output: 3+4+5=12
console.log(chalk.green("Welcome to the calculator!"));
const calculator = async () => {
    let result = 0;
    let operator = "";
    let num = 0;
    let flag = true;
    while (flag) {
        const { num1 } = await inquirer.prompt({
            type: "number",
            name: "num1",
            message: chalk.blue("Enter number"),
        });
        num = num1;
        const { operator1 } = await inquirer.prompt({
            type: "list",
            name: "operator1",
            message: chalk.blue("Enter operator"),
            choices: ["+", "-", "*", "/"],
        });
        operator = operator1;
        const { equal } = await inquirer.prompt({
            type: "list",
            name: "equal",
            message: "Enter equal",
            choices: ["=", "exit"],
        });
        if (equal === "=") {
            switch (operator) {
                case "+":
                    result += num;
                    break;
                case "-":
                    result -= num;
                    break;
                case "*":
                    result *= num;
                    break;
                case "/":
                    result /= num;
                    break;
            }
            console.log(chalk.green(result));
        }
        else {
            console.log(chalk.green(result));
            flag = false;
        }
    }
};
calculator();
