/*
Name: Kemerson D. Fernandez
Section: IV-BSIT-C
Activity: N2 - Modular Calculator
Date: November 25, 2026
*/

const path = require("path");
const operations = require("./operations");
const { formatResult } = require("./formatter");

// Get the project folder name using the built-in path module
const projectFolder = path.basename(__dirname);

// Get command-line arguments
const operation = process.argv[2];
const num1Input = process.argv[3];
const num2Input = process.argv[4];

console.log("Name: Kemerson D. Fernandez");
console.log("Section: IV-BSIT-C");
console.log("Project: " + projectFolder);
console.log("--------------------------------");

if (!operation) {
    console.error("Please provide an operation.");
    console.log("Usage: node index.js <operation> <number1> <number2>");
    process.exitCode = 1;
} else if (!Object.prototype.hasOwnProperty.call(operations, operation)) {
    console.error(`Unknown operation: ${operation}`);
    process.exitCode = 1;
} else if (
    num1Input === undefined ||
    num2Input === undefined ||
    num1Input.trim() === "" ||
    num2Input.trim() === "" ||
    Number.isNaN(Number(num1Input)) ||
    Number.isNaN(Number(num2Input))
) {
    console.error("Please provide two valid numbers.");
    process.exitCode = 1;
} else {
    try {
        const num1 = Number(num1Input);
        const num2 = Number(num2Input);

        const result = operations[operation](num1, num2);

        console.log(formatResult(operation, num1, num2, result));
    } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
    }
}
