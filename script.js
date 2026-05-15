const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const remove = document.querySelectorAll('.delete')
const hover = document.querySelectorAll('button');
const display = document.querySelector('.content');
let holdValue = ''
let switchNum = 0

const user = {
  num1: 0,
  num2: 0,
  operator: function(){},
}

const operate = (operator, num1, num2) => operator(num1, num2)
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if ((num1 === 0 && num2 === 0) || (num1 === 0 || num2 === 0)) {
        return 'ERROR'
    } else {
        return num1 / num2
    }
} 

const setAdd = function() {
    user.operator = add;
    switchNum = 1
    holdValue = ''
}

const setSubtract = function() {
    user.operator = subtract;
    switchNum = 1
    holdValue = ''
}

const setMultiply = function() {
    user.operator = multiply;
    switchNum = 1
    holdValue = ''
}

const setDivide = function() {
    user.operator = divide;
    switchNum = 1
    holdValue = ''
}

const applyDecimal = function() {
    let arr = holdValue.split(',')
    if (holdValue.includes('.')) return 
    if (switchNum === 0) {
        holdValue += '.'
        display.textContent = holdValue
    } else {
        holdValue += '.'
        display.textContent = holdValue
    }
}

const equals = function() {
    let result = operate(user.operator, user.num1, user.num2)
    if (result === 'ERROR') {
        display.textContent = 'ERROR'
    } else {
        display.textContent = Math.round(result)
        user.num1 = result;
        user.num2 = 0
        switchNum = 0
    }
}

const clear = function() {
    display.textContent = ''
    user.num1 = 0
    user.num2 = 0
    user.operator = function(){};
    holdValue = ''
    switchNum = 0
}

const backSpace = function() {
    if (switchNum === 0) {
        let arr = user.num1.toString().split('');
        arr.pop()
        holdValue = arr.join('')
        display.textContent = holdValue
        user.num1 = +display.textContent
    } else {
        let arr = user.num2.toString().split('');
        arr.pop()
        holdValue = arr.join('')
        display.textContent = holdValue
        user.num2 = +display.textContent
    }
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', (event) => {
        if (switchNum === 1) equals()
        switch(event.target.id) {
            case 'add':
                setAdd()
                break
            case 'subtract':
                setSubtract()
                break
            case 'multiply':
                setMultiply()
                break
            case 'divide':
                setDivide()
                break
            case 'decimal':
                applyDecimal()
                break
            case 'equals':
                equals()
                break
        }
    })
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (event) => {
    holdValue += event.target.id
    display.textContent = holdValue 
    if (switchNum === 0) {
        user.num1 = +display.textContent
    } else {
        user.num2 = +display.textContent
    }
    })
}

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'clear':
                clear()
                break
            case 'back':
                backSpace()
                break
        }
    })
}