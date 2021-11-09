const kalkulator = {
    displayNumber: '0'
}
const buttons = document.querySelectorAll(".buttons");
for(let button of buttons){
    button.addEventListener('click', function(e){
        const firstNumber = document.getElementById("first-number");
        firstNumber.innerText = kalkulator.displayNumber;
        const secondNumber = document.getElementById("second-number");
        
        const target = e.target;
        if(kalkulator.displayNumber === '0'){
            firstNumber.innerHTML = target.innerText;
        }else if(kalkulator.displayNumber !== '0'){
            secondNumber.innerHTML += target.innerText;
        }else{
            firstNumber.innerHTML += target.innerText;
        }
    });
}
const operators = document.querySelectorAll(".operator");
for(let operator of operators){
    operator.addEventListener('click', function(event){
        const target = event.target;
        const operasi = document.getElementById("operasi");
        if(operasi !== "__"){
            operasi.innerHTML = target.innerText;
        }else{
            alert("operator sudah ditetapkan!");
        }
    })
}

