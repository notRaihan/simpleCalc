document.addEventListener('DOMContentLoaded', (event) => {
    const values = [];
    const opValue = [];
    const resultInput = document.getElementById("result");
    const total = document.getElementById("total");
    let lastButtonWasOperator = false;

    document.getElementById("clearCal").addEventListener("click", clearCal);
    document.getElementById("resultCal").addEventListener("click", resultCal);

    Array.from(document.getElementsByClassName("number")).forEach(element => {
        element.addEventListener("click", number);
    });

    Array.from(document.getElementsByClassName("operator")).forEach(element => {
        element.addEventListener("click", operator);
    });

    function clearCal() {
        resultInput.value = "";
        values.length = 0;
        opValue.length = 0;
        total.innerHTML = "";
        lastButtonWasOperator = false;
    }

    function number(event) {
        if (opValue.length === 0 && total.innerHTML !== "") {
            clearCal();
        }
        result.value += event.target.value;
        lastButtonWasOperator = false;
    }

    function operator(event) {
        if (lastButtonWasOperator) {
            return;
        }

        const value = resultInput.value;

        if (resultInput.value.includes("=") && values.length === 0) {
            const value = resultInput.value.replace("=", "");
            values.push(value);
            opValue.push(event.target.value);
            total.innerHTML = "";
            total.innerHTML = value + " " + event.target.value + " ";
            result.value = "";
            lastButtonWasOperator = true;
            return;
        }
        result.value = "";
        values.push(value);
        opValue.push(event.target.value);

        total.innerHTML += value + " " + event.target.value + " ";
        lastButtonWasOperator = true;
    }

    function resultCal() {
        if (
            opValue.length === 0 ||
            (values.length === 1 && resultInput.value === "")
        ) {
            return;
        }
        let totalValue = 0;
        total.innerHTML += result.value;

        values.push(result.value);
        for (let i = 0; i < values.length; i++) {
            if (i === 0) {
                totalValue = values[i];
            } else {
                if (opValue[i - 1] === "+") {
                    totalValue =
                        parseInt(totalValue) + parseInt(values[i]);
                } else if (opValue[i - 1] === "-") {
                    totalValue =
                        parseInt(totalValue) - parseInt(values[i]);
                } else if (opValue[i - 1] === "*") {
                    totalValue =
                        parseInt(totalValue) * parseInt(values[i]);
                } else if (opValue[i - 1] === "/") {
                    totalValue =
                        parseInt(totalValue) / parseInt(values[i]);
                }
            }
        }
        resultInput.value = "= " + totalValue;
        values.length = 0;
        opValue.length = 0;
        lastButtonWasOperator = false;
    }
});

/*
1. The code is wrapped in a DOMContentLoaded event listener. This ensures that the JavaScript code doesn't run until the HTML document has fully loaded.

2. Several variables are declared at the start of the script:
    - values is an array that will hold the numbers the user inputs.
    - opValue is an array that will hold the operators the user inputs.
    - resultInput is a reference to the HTML element where the result of the calculation will be displayed.
    - total is a reference to the HTML element where the current calculation will be displayed.
    - lastButtonWasOperator is a boolean flag that keeps track of whether the last button pressed was an operator.

3.Event listeners are added to the "Clear" and "Calculate" buttons. When the "Clear" button is clicked, the clearCal function is called. When the "Calculate" button is clicked, the resultCal function is called.

4. Event listeners are also added to all the number and operator buttons. When a number button is clicked, the number function is called. When an operator button is clicked, the operator function is called.

5. The clearCal function clears the resultInput and total elements, and empties the values and opValue arrays. It also resets the lastButtonWasOperator flag to false.

6. The number function appends the value of the clicked number button to the resultInput element. If the last button clicked was an operator, it first clears the calculator. It also sets the lastButtonWasOperator flag to false.

7. The operator function adds the operator of the clicked button to the opValue array and updates the total element. If the last button clicked was an operator, it does nothing. It also sets the lastButtonWasOperator flag to true.

8. The resultCal function calculates the result of the current calculation and displays it in the resultInput element. It also clears the values and opValue arrays, and resets the lastButtonWasOperator flag to false.

This code follows good practices for modern JavaScript, including the use of const and let for variable declaration, addEventListener for event handling, and strict equality checks (=== instead of ==).

*/