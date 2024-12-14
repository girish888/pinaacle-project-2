const resultInput = document.getElementById("result");

// Append a number to the display
function appendNumber(number) {
    resultInput.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
    if (resultInput.value === "" && operator !== "-") return; // Avoid starting with invalid operators
    resultInput.value += operator;
}

// Clear the display
function clearDisplay() {
    resultInput.value = "";
}

// Delete the last character
function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        resultInput.value = eval(resultInput.value); // Evaluate the expression
    } catch (error) {
        alert("Invalid expression");
    }
}
