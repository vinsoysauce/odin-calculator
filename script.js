const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const hover = document.querySelectorAll('button');
const display = document.querySelector('.content');
display.textContent = '';

const user = {
  num1: 0,
  num2: 0,
  operator: () => {},
}

const operate = (operator, num1, num2) => operator(num1, num2)
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
        display.textContent = 'MATH ERROR'
        return
    } else {
        return num1 / num2
    }
} 


let holdValue = ''
let switchNum = 0
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'add':
                switchNum = 1
                holdValue = ''
                user.operator = add;
                break
            case 'subtract':
                switchNum = 1
                holdValue = ''
                user.operator = subtract;
                break
            case 'multiply':
                switchNum = 1
                holdValue = ''
                user.operator = multiply;
                break
            case 'divide':
                switchNum = 1
                holdValue = ''
                user.operator = divide;
                break
            case 'decimal':
                break
            case 'equals':
                let result = operate(user.operator, user.num1, user.num2)
                display.textContent = result
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







// button.addEventListener('click', (event) => {
//     let switchOperand = 0
//     let target = event.target
//     switch(target.id) {
//         case 'clear':
//             operand.num1 = 0;
//             operand.num2 = 0;
//             content.textContent = ''
//             holdValue = ''
//             break
//         case 'back':
//             break
//         case 'add':
//             switchOperand = 1
//             holdValue = ''
//             break
//         case 'subtract':
//             break
//         case 'multiply':
//             break
//         case 'divide':
//             break
//         case 'equals':
//             holdValue = add(operand.num1, operand.num2)
//             content.textContent = holdValue
//             break
//         default:
//             holdValue += target.id
//             content.textContent = holdValue
//     }
//     if (switchOperand === 0) {
//         operand.num1 = +content.textContent
//     } else {
//         operand.num2 = +content.textContent
//     }
// })