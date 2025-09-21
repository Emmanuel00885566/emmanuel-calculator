import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import readline from 'readline';
import {add, subtract, multiply, divide} from './my_module/calculator.js';
import {capitalizeName, fullName} from './my_module/nameFormatter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log (chalk.yellow("Running file:"), chalk.green(path.basename(__filename)));

console.log(chalk.magenta("My Registration Number is:"), chalk.bgBlue.white("BD/2025/TC3/048"));

const formattedName =fullName("adeboye","emmanuel", "oluwatosin");
console.log(chalk.bold.yellow(`My Name: ${formattedName}`));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(chalk.blue("Enter first number: "), (num1) => {
    rl.question(chalk.blue("Enter second number: "), (num2) => {
        rl.question(chalk.yellow("Choose operation (+, -, *, /): "), (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            
            try {
                let result;
                switch (operation.toLowerCase()) {
                    case '+':
                        result = add(a, b);
                        console.log(chalk.red(`Addition: ${a} + ${b} = ${result}`));
                        break;
                    case '-':
                        result = subtract(a, b);
                        console.log(chalk.blue(`Subtraction: ${a} - ${b} = ${result}`));
                        break;
                    case '*':
                        result = multiply(a, b);
                        console.log(chalk.green(`Multiplication: ${a} * ${b} = ${result}`));
                        break;
                    case '/':
                        result = divide(a, b);
                        console.log(chalk.cyan(`Division: ${a} / ${b} = ${result}`));
                        break;
                    default:
                        console.log(chalk.bgRed.white("Error:"), chalk.red("Invalid operation."));
                }
            } catch (error) {
                console.error(chalk.bgRed.white("Error:"), chalk.red(error.message));
            }

            rl.close();
        });
    });
});