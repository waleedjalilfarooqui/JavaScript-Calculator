var button = document.querySelectorAll(".button");
var screen = document.querySelector(".screen1");
var input = "";
operator = "";
result = 0;



for (var i = 0; i < button.length; i++) {


    button[i].addEventListener("click", function (event) {
        var value = this.innerText;

        if (value >= "0" && value <= "9") {
            if (input.length <= 5) {
                input += value;
                screen.textContent = input;
            }
        }

        else if (value == "+" || value == "-" || value == "*" || value == "/") {

            if (operator !== "") {
                calculate()

            }
            operator = value;
            result = parseFloat(input);
            input = " ";

        }
        else if (value === "=") {

            if (operator !== "") {
                calculate();
                operator = "";
            }
        }
        else if (value === "C") {
            input = "";
            operator = "";
            result = 0;
            screen.innerText = "0";
        }




    });

}

var c = document.querySelectorAll(".col");

for (var j = 0; j < c.length; j++) {

    c[j].classList.add("sm-3");

}

function calculate() {

    switch (operator) {
        case "+":
            result += parseFloat(input);
            break;
        case "*":
            result *= parseFloat(input);

            break;
        case "-":
            result -= parseFloat(input);


            break;
        case "/":
            if (parseFloat(input) !== 0) {
                result /= parseFloat(input);
            } else {
                screen.textContent = "Error";
                return;
            }
            break;

        default:
            break;
    }

    screen.innerText = result;
    input = result.toString();






}