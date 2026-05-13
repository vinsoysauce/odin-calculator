const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const content = document.querySelector('.content')
content.textContent = '';
let holdValue = ''
const operand = {
  num1: 0,
  num2: 0,
}

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const operate = (operator, num1, num2) => operator(num1, num2)


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

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'add':
                break
            case 'subtract':
                break
            case 'multiply':
                break
            case 'divide':
                break
            case 'decimal':
                break
            case 'equals':
                break
        }
    })
}