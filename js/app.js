var calculadora = new Object();

var number ="0";
var number1 ="";
var number2 ="";
var operation ="";
var result = false;

var display = document.getElementById('display')
var buttonDot = document.getElementById('punto');
var buttons = document.getElementsByClassName('tecla');
var buttonClear = document.getElementById('on');
var buttonSign = document.getElementById('sign');
var buttonAdd = document.getElementById('mas');
var buttonSubtract = document.getElementById('menos');
var buttonMultiply = document.getElementById('por');
var buttonDivide = document.getElementById('dividido');
var buttonEqual = document.getElementById('igual');

window.addEventListener('DOMContentLoaded', function() {
    assignEvents();
}, true);

var assignEvents = function() {
    onPressKey();
    showKeyPressed();
    clearDisplay();
    addDot();
    addSign();
    addOperation();
    showResult();
};

var showResult = function () {
    buttonEqual.onclick = function () {
        number2 = display.innerHTML;
        debugger;
        if(number1 != "" && number2 != ""){
            if(operation == "add") {
                r = add(Number(number1), Number(number2)) + "";
            }
            if(operation == "subtract") {
                r = subtract(Number(number1), Number(number2)) + "";
            }
            if(operation == "multiply") {
                r = multiply(Number(number1), Number(number2)) + "";
            }
            if(operation == "divide") {
                r = divide(Number(number1), Number(number2)) + "";
            }
            display.innerHTML = (r.length > 8) ? r.substring(0,8) : r;
            result = true;
        }
    }
}

var addOperation = function () {
    buttonAdd.onclick = function () {
        setNumber1("add");
    }
    buttonSubtract.onclick = function () {
        setNumber1("subtract");
    }
    buttonMultiply.onclick = function () {
        setNumber1("multiply");
    }
    buttonDivide.onclick = function () {
        setNumber1("divide");
    }

    var setNumber1 = function (o) {
        number = display.innerHTML;
        if(number == ""){ operation = o; }
        else{
            if(Number(number) != 0) {
                number1 = number;
                operation = o;
                display.innerHTML = "";
            }
        }
    }
}

var addSign = function () {
    buttonSign.onclick = function () {
        number = display.innerHTML;
        if(Number(number) != 0) {
            if (number.substring(0, 1) == "-") {
                display.innerHTML = number.substring(1, number.length);
            }
            else {
                display.innerHTML = "-" + number;
            }
        }
    }
}

var addDot = function () {
    buttonDot.onclick = function () {
        number = display.innerHTML;
        var hasdot = /\.+/.test(number);
        if (!hasdot) {
            display.innerHTML = number + ".";
        }
    }
}

var clearDisplay = function () {
    buttonClear.onclick = function () {
        display.innerHTML = "0";
        number1 ="";
        number2 ="";
        operation ="";
    }
}

var onPressKey = function () {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onmousedown = function () {
            this.style.padding = "2px";
        }
        buttons[i].onmouseup= function () {
            this.style.padding = "0px";
        }
        buttons[i].onmouseover= function () {
            this.style.cursor = "pointer";
        }
    }
}

var showKeyPressed = function () {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            var isnum = /^\d+$/.test(this.id);
            if(isnum){
                number = display.innerHTML;
                if(number.replace(/[^0-9]/g,'').length < 8) {
                    if (number == "0" || result) {
                        number = this.id;
                        if(result){
                            result = false;
                            number1 = "";
                            number2 = "";
                            operation = "";
                        }
                    }
                    else {
                        number += this.id;
                    }
                    display.innerHTML = number;
                }
            }
        }
    }
}

var add = function (num1, num2) {
    return num1 + num2;
}

var subtract = function (num1, num2) {
    return num1 - num2;
}

var multiply = function (num1, num2) {
    return num1 * num2;
}

var divide = function (num1, num2) {
    return num1 / num2;
}