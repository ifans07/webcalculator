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

// tombol negative
const negative = document.querySelector(".negative");
negative.addEventListener('click', (event) => {
    console.log(event.target.innerText)
    if(calculatorScreen.innerText === '0'){
        return
    }
    calculatorScreen.innerText *= -1;
})

// button decimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
const decimal = document.querySelector(".decimal");
console.log(decimal);
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.innerText)
    updateScreen(currentNumber)
})

// button all clear
const clearAll = () => {
    prevNumber = ''
    calculationOPerator = ''
    currentNumber = '0'
    hasil.innerText = ''
    calculatorScreen.innerText = currentNumber
    operatorScreen.innerText = '___'
    secondNumber.innerText = '0'
}
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

// menampilkan angka
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.innerText = number
}

// menampilkan angka kedua
const secondNumber = document.getElementById("second-number");
// console.log(secondNumber);
// const secondNumberScreen = (number) => {
//     secondNumber.innerText = number
// }

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
    })
})

// membuat function operator
const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

// mengambil operator
const operators = document.querySelectorAll(".operator");
console.log(operators);
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        const operationName = event.target.innerText;
        console.log(operationName);
        inputOperator(event.target.innerText)
        updateOperator(event.target.innerText)
        clearVar(operationName)
        calculationOperator = operationName
    })
})
function clearVar(name = "") {
    // nextNumber += currentNumber + " " + name + " ";
    if(calculatorScreen.innerText === currentNumber){
        hasil.innerText += currentNumber
    }
    secondNumber.innerText = prevNumber;
    calculatorScreen.innerText = currentNumber;
    // dis2Num = "";
    // tempResultEl.innerText = result;
  }

// kalkulasi
const calculate = () => {
    let result = '';
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "×":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "÷":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
        default:
            break;
    }
    const history = {
        firstNumber: prevNumber,
        secondNumber: currentNumber,
        operator: calculationOperator,
        result: result
    }
    putHistory(history);
    renderHistory();

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

// ketika menekan angka di keyboard
window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      clickButtonEl(e.key);
    }
})
function clickButtonEl(key) {
    numbers.forEach((button) => {
      if (button.innerText === key) {
        button.click();
      }
    });
  }