var firstOperator = ""
var secondOperator = ""
var operation = ""

function btn0() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `0`
    firstOperator += "0"
    secondOperator += "0"
}
function btn1() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `1`
    firstOperator += "1"
    secondOperator += "1"
}
function btn2() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `2`
    firstOperator += "2"
    secondOperator += "2"
}
function btn3() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `3`
    firstOperator += "3"
    secondOperator += "3"
}
function btn4() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `4`
    firstOperator += "4"
    secondOperator += "4"
}
function btn5() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `5`
    firstOperator += "5"
    secondOperator += "5"
}
function btn6() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `6`
    firstOperator += "6"
    secondOperator += "6"
}
function btn7() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `7`
    firstOperator += "7"
    secondOperator += "7"
}
function btn8() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `8`
    firstOperator += "8"
    secondOperator += "8"
}
function btn9() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML += `9`
    firstOperator += "9"
    secondOperator += "9"
}
function btnAdd() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML = ""
    secondOperator = ""
    firstOperatorInt = parseInt(firstOperator)
    operation = "+"
}
function btnSub() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML = ""
    secondOperator = ""
    firstOperatorInt = parseInt(firstOperator)
    operation = "-"
}
function btnMul() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML = ""
    secondOperator = ""
    firstOperatorInt = parseInt(firstOperator)
    operation = "*"
}
function btnDiv() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML = ""
    secondOperator = ""
    firstOperatorInt = parseInt(firstOperator)
    operation = "/"
}
function clearScreen() {
    let screen = window.document.getElementById('calculatorScreen')
    screen.innerHTML = ""
    firstOperator = ""
    firstOperatorInt = ""
    secondOperator = ""
}
function btnRes() {
    let res;
    let screen;
    switch (operation) {
        case "+":
            res = firstOperatorInt + parseInt(secondOperator)
            screen = window.document.getElementById('calculatorScreen')
            screen.innerHTML = `${res}`
            break;

        case "-":
            res = firstOperatorInt - parseInt(secondOperator)
            screen = window.document.getElementById('calculatorScreen')
            screen.innerHTML = `${res}`
            break;

        case "*":
            res = firstOperatorInt * parseInt(secondOperator)
            screen = window.document.getElementById('calculatorScreen')
            screen.innerHTML = `${res}`
            break;
        case "/":
            res = firstOperatorInt / parseInt(secondOperator)
            screen = window.document.getElementById('calculatorScreen')
            screen.innerHTML = `${res}`
            break;
        default:
            break;
    }
    firstOperator = ""
    firstOperatorInt = ""
    secondOperator = ""
}

