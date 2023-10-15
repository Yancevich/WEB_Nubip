let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (operator === '') {
        firstInput = currentInput;
        currentInput = '';
        operator = op;
    } else {
        calculate();
        operator = op;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstInput = '';
    display.value = '';
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    clearDisplay();
    display.value = result;
    currentInput = result;
    operator = '';
    firstInput = '';
}
