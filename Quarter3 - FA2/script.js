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
        message += "sum is " + result;
		
    } else if (operator === "-") {
        result = num1 - num2;
        message += "difference is " + result;
		
    } else if (operator === "*") {
        result = num1 * num2;
        message += "product is " + result;
		
    } else if (operator === "/") {
		
		if (num2 !== 0) {
			result = num1 / num2;
		} else {
			result = "undefined (it cannot be divided by zero)";
		}
		
    message += "quotient is " + result;
	
	} else if (operator === "%") {
    
		if (num2 !== 0) {
			result = num1 % num2;
		} else {
			result = "undefined (it cannot be modulus by zero)";
		}
		
    message += "remainder is " + result;
	
	}
	
    resultElement.innerHTML = message + ".";
}
