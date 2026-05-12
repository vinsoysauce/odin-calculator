const button = document.querySelector('#button-container')
const content = document.querySelector('.content')
content.textContent = '';
let holdValue = ''
const operand = {
  num1: 0,
  num2: 0,
  operator: '',
}

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => operator(num1, num2)


button.addEventListener('click', (event) => {
    let switchOperand = 0
    let target = event.target
    switch(target.id) {
        case 'clear':
            operand.one = 0;
            operand.two = 0;
            content.textContent = ''
            break
        case 'back':
            break
        case 'add':
            switchOperand = 1
            holdValue = ''
            break
        case 'subtract':
            break
        case 'multiply':
            break
        case 'divide':
            break
        case 'equals':
            holdValue = operate()
            break
        default:
            holdValue += target.id
            content.textContent = holdValue
    }
    if (switchOperand === 0) {
        operand.num1 = +content.textContent
    } else {
        operand.num2 = +content.textContent
    }
})

