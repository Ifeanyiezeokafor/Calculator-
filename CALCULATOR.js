let firstD='';
let secondD='';
let operator='';
let display=document.querySelector('.display-container');
let total=''
function displayOfValue(value) {
    display.textContent=value
}
function sumOfTheValues(a,b) {
    let answer =+a + +b
    return (answer).toFixed(2)
}

function multiplicationOfTheValues(a,b) {
    let answer =+a * +b
    return (answer).toFixed(2)
}

function subtractionOfTheValues(a,b) {
    let answer =+a - +b
    return (answer).toFixed(2) 
}

function divisionOfTheValues(a,b) {
    if (b==0) { 
        displayOfValue('zero is not used to divide numbers')
    }else {
    let answer =+a / +b
    return (answer).toFixed(2)
    }
}

function assignsFirstDAndSecondDValues(digits) {
    if (operator=='') {
        firstD+=digits
        displayOfValue(firstD)
    } else {
        secondD+=digits
        displayOfValue(secondD)
    }

}

function resetValue() {
    firstD=''
    secondD=''
    operator=''
    total=''
    displayOfValue(0)
}

function resetValuesWithEqaulity(params) {
    firstD=''
    secondD=''
    operator=''
    total=''
}

function calculateTheValues() {
    let answer;
    if (operator=='-'||operator=='+'||operator=='/'||operator=='*') {
        if (firstD=='') firstD=0
        if (secondD=='')secondD=0
        if (operator=='-') {
          answer=  subtractionOfTheValues(firstD, secondD)
        }else if(operator=='+'){
            answer= sumOfTheValues(firstD, secondD)
        }else if(operator=='/'&&secondD==0){
            displayOfValue('zero is not used to divide numbers')
            return
        }else if(operator=='/'){
            answer = divisionOfTheValues(firstD, secondD)
        }
        else if(operator=='*'){
            answer = multiplicationOfTheValues(firstD, secondD)
        }
    resetValue()
    total=answer
    assignsFirstDAndSecondDValues(answer)
    displayOfValue(answer)
    }
}

function assignTheOperator(ops) {
    if(secondD==''&&operator=='/'){
        operator=ops
    }else{
    calculateTheValues()
    operator=ops
    }
}
//logic that runs the calculator
document.querySelector('.container').addEventListener('click',(ele)=>{
    if (/\d/.test(ele.target.textContent)) {
        assignsFirstDAndSecondDValues(ele.target.textContent)
    }else if(ele.target.textContent=='+'||ele.target.textContent=='/'||ele.target.textContent=='-'||ele.target.textContent=='x'){
        assignTheOperator(ele.target.textContent)
    }else if(ele.target.textContent=='='){
        calculateTheValues()
        resetValuesWithEqaulity()
    }else if(ele.target.textContent=='AC'){
        resetValue()
    }
})

document.addEventListener('keydown',(keys)=>{
        if (/\d/.test(keys.key)) {
        assignsFirstDAndSecondDValues(keys.key)
    }else if(keys.key=='+'||keys.key=='/'||keys.key=='-'){
        assignTheOperator(keys.key)
    }else if(keys.key=='='){
        calculateTheValues()
        resetValuesWithEqaulity()
    }else if(keys.key=='*'){
        assignTheOperator('x')
    }
})

console.log()