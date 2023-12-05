function add() {
    calculate((a, b) => a + b);
}

function subtract() {
    calculate((a, b) => a - b);
}

function multiply() {
    calculate((a, b) => a * b);
}

function divide() {
    calculate((a, b) => {
        if (b === 0) {
            alert("Cannot divide by zero");
            return 0;
        }
        return a / b;
    });
}

function calculate(operation) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (num1 === "" || num2 === "") {
        alert("Please enter both numbers");
        return;
    }

    var result = operation(parseFloat(num1), parseFloat(num2));

    document.getElementById('result').innerText = "Result: " + result;
}