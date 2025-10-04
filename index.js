const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value;
        const result = simpleEvaluate(expression);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// A simple function to evaluate basic expressions (+ - * /)
function simpleEvaluate(expr) {
    const operators = expr.match(/[\+\-\*\/]/g);
    const numbers = expr.split(/[\+\-\*\/]/).map(Number);

    if (!operators || numbers.length === 0) return 0;

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const op = operators[i];
        const num = numbers[i + 1];

        if (op === '+') result += num;
        else if (op === '-') result -= num;
        else if (op === '*') result *= num;
        else if (op === '/') result /= num;
    }

    return result;
}
