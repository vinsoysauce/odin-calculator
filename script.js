//
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const remove = document.querySelectorAll('.delete')
const hover = document.querySelectorAll('button');
const display = document.querySelector('.content');
let holdValue = ''
let switchNum = 0


// Object that store user input state and user operator function
const user = {
  num1: 0,
  num2: 0,
  operator: function(){},
}

// operator functions
const operate = (operator, num1, num2) => operator(num1, num2)
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
        return 'ERROR'
    } else {
        return num1 / num2
    }
} 


// set operator function
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

// functions for decimal, equals, clear, backspace
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
        user.operator = function(){}
        user.num2 = 0
        switchNum = 0
        display.textContent = 'ERROR'
    } else {
        display.textContent = Math.round(result)
        user.num1 = result;
        user.num2 = 0
        switchNum = 0
    }
}
const clear = function() {
    switchNum = 0
    display.textContent = ''
    user.num1 = 0
    user.num2 = 0
    user.operator = function(){};
    holdValue = '' 
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

// event listeners for click 
operators.forEach((button) => {
    button.addEventListener('click', (event) => {
         switch(event.target.id) {
            case 'add':
                if (switchNum === 1) equals()
                setAdd()
                break
            case 'subtract':
                if (switchNum === 1) equals()
                setSubtract()
                break
            case 'multiply':
                if (switchNum === 1) equals()
                setMultiply()
                break
            case 'divide':
                if (switchNum === 1) equals()
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
})


numbers.forEach((button) => {
    button.addEventListener('click', (event) => {
    holdValue += event.target.id
    display.textContent = holdValue 
    if (switchNum === 0) {
        user.num1 = +display.textContent
    } else {
        user.num2 = +display.textContent
    }
    })
})


remove.forEach((button) => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'clear':
                clear()
                break
            case 'back':
                backSpace()
                break
        }
    })
})

// event listeners for keyboard
document.addEventListener('keydown', (event)=> {
    switch(event.key) {
        case '1':
            holdValue += 1
            break;
        case '2':
            holdValue += 2;
            break;
        case '3':
            holdValue += 3;
            break;
        case '4':
            holdValue += 4;
            break;
        case '5':
            holdValue += 5;
            break;
        case '6':
            holdValue += 6;
            break;
        case '7':
            holdValue += 7;
            break;
        case '8':
            holdValue += 8;
            break;
        case '9':
            holdValue += 9;
            break;
        case '0':
            holdValue += 0;
            break;
    }
    display.textContent = holdValue
    if (switchNum === 0) {
        user.num1 = +display.textContent
    } else {
        user.num2 = +display.textContent
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        if (switchNum === 1) equals()
        setAdd()
    } else if (event.key === 's') {
        if (switchNum === 1) equals()
        setSubtract()
    } else if (event.key === 'm') {
        if (switchNum === 1) equals()
        setMultiply()
    } else if (event.key === 'd') {
        if (switchNum === 1) equals()
        setDivide()
    } else if (event.key === '.') {
        applyDecimal()
    } else if (event.key === '=') {
        equals()
    }
})

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        clear()
    } else if (event.key === 'Backspace') {
        backSpace()
    }
})