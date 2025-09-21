import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import {add, subtract, multiply, divide} from './my_module/calculator.js';
import {capitalizeName, fullName} from './my_module/nameFormatter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.yellow("Running file:"), chalk.green(path.basename(__filename)));

console.log(chalk.magenta("My Registration Number is:"), chalk.bgBlue.white("BD/2025/TC3/048"));

let x = 20, y = 4;

console.log(chalk.red(`Addition: ${x} + ${y} = ${add(x, y)}`));
console.log(chalk.blue(`Subtraction: ${x} - ${y} = ${subtract(x, y)}`));
console.log(chalk.green(`Multiplication: ${x} * ${y} = ${multiply(x, y)}`));

try {
console.log(chalk.cyan(`Division: ${x} / ${y} = ${divide(x, y)}`));
} catch (error) {
    console.error(chalk.bgRed.white("Error:"), chalk.red(error.message));
}


const formattedName =fullName("adeboye", "emmanuel", "oluwatosin", );
console.log(chalk.bold.yellow(`NAME: ${formattedName}`));

// console.log(chalk.gray(`Current directory: ${__dirname}`));
// console.log(chalk.gray(`Current file: ${__filename}`));
