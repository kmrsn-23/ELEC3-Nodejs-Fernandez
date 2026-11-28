/*
Name: Kemerson D. Fernandez
Section: IV-BSIT-C
Activity: N2 - Modular Calculator
Date: November 25, 2026
*/

function formatResult(operation, a, b, result) {
    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/"
    };

    if (operation === "average") {
        return `Average of ${a} and ${b} = ${result}`;
    }

    const symbol = symbols[operation];

    return `${a} ${symbol} ${b} = ${result}`;
}

module.exports = {
    formatResult
};
