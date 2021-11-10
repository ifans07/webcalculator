let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let currentOperator = '___';
let nextNumber = '0';

// input number
const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

// menampilkan angka
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.innerText = number
}

// menampilkan angka kedua
const secondNumber = document.getElementById("second-number");
console.log(secondNumber);
const secondNumberScreen = (number) => {
    secondNumber.innerText = number
}

// menampilkan operator
const operatorScreen = document.getElementById("operasi");
console.log(operatorScreen);
const updateOperator = (operator) => {
    operatorScreen.innerText = operator
}

const numbers = document.querySelectorAll(".buttons");
console.log(numbers);
numbers.forEach((number) => {
    console.log(number);
    number.addEventListener('click', (event) => {
        inputNumber(event.target.innerText);
        updateScreen(currentNumber);
        secondNumberScreen(nextNumber);
    })
})

// membuat function operator
const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operator;
    if(prevNumber === currentNumber){
        nextNumber = currentNumber;

    }else{

        currentNumber = '';
    }
}

// mengambil operator
const operators = document.querySelectorAll(".operator");
console.log(operators);
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.innerText)
        updateOperator(event.target.innerText)
    })
})

// kalkulasi
const calculate = () => {
    let result = '';
    switch(calculationOperator){
        case "+":
            result = parseInt(prevNumber) + parseInt(currentNumber);
            break;
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber);
            break;
        case "×":
            result = parseInt(prevNumber) * parseInt(currentNumber);
            break;
        case "÷":
            result = parseInt(prevNumber) / parseInt(currentNumber);
            break;
        default:
            break;
    }
    resultScreen(currentNumber = result);
    calculationOperator = '';
}

const hasil = document.getElementById("hasil");
console.log(hasil);
const resultScreen = (result) => {
    hasil.innerText = result;
}

const equalSign = document.querySelector(".equals");
console.log(equalSign);
equalSign.addEventListener('click', () => {
    
    console.log("sama dengan dklik!")
    calculate();
    // updateScreen(currentNumber);
})
