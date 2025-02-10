function displayResult(operator) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = "Please enter valid numbers.";
        return;
    }

    var result;
    var message = "The ";

    if (operator === "+") {
        result = num1 + num2;
        message += "sum of " + num1 + " and " + num2 + " is " + result;

    } else if (operator === "-") {
        result = num1 - num2;
        message += "difference of " + num1 + " and " + num2 + " is " + result;

    } else if (operator === "*") {
        result = num1 * num2;
        message += "product of " + num1 + " and " + num2 + " is " + result;

    } else if (operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
            message += "quotient of " + num1 + " and " + num2 + " is " + result;
        } else {
            message += "quotient is undefined (it cannot be divided by zero)";
        }

    } else if (operator === "%") {
        if (num2 !== 0) {
            result = num1 % num2;
            message += "remainder of " + num1 + " and " + num2 + " is " + result;
        } else {
            message += "remainder is undefined (it cannot be modulus by zero)";
        }
    }

    resultElement.innerHTML = message + ".";
}

