let total = 0;
let str = "0";
let operator;

const aff = document.querySelector(".screen");

function gestion(value)
{
    if (isNaN(value)) {
        Symbole_ges(value);
    } else {
        Number_ges(value);
    }
    aff.innerHTML = str;
}

function Symbole_ges(symbol)
{
    if (symbol === "c") {
        str = "0";
        total = 0;
    } else if (symbol === "=") {
        if (operator === null) {
            return
        }
        operation(parseInt(str));
        operator = null;
        str = total;
        total = 0;
    } else if (symbol == "←") {
        if (str.length === 1) {
            str = "0";
        } else {
            str = str.toString(0, str.length - 1);
        }
    } else if (symbol === "+" || symbol === "÷" || symbol === "×" || symbol === "−" ) {
        calculate(symbol);
    }
}

function calculate(symbol)
{
    if (str === "0") {
        return;
    }
    const intstr = parseInt(str);
    if (total === 0) {
        total = intstr;
    } else { 
        operation(intBuffer);
    }
    operator = symbol;
    str = "0";
}

function operation(intstr)
{
    if (operator === "+") {
        total += intstr;
    } else if (operator === "-") {
        total -= intstr
    } else if (operator === "×") {
        total *= intstr
    } else if (operator === "÷") {
        total /= intstr
    }
}

function Number_ges(num)
{
    if (str === "0") {
        str = num;
    } else {
        str += num;
    }
}

function start()
{
    document.querySelector(".calc-buttons").addEventListener('click', function(event)
    {
        gestion(event.target.innerText);
    })
}

start();