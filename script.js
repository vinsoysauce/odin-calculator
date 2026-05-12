const button = document.querySelector('#button-container')
const content = document.querySelector('.content')

content.textContent = '';

const operandObj = {
    operandOne = 0,
    operandTwo = 0,
}


button.addEventListener('click', (event) => {
    let target = event.target

    switch(target.id) {
        case 'clear':
            content.textContent = ''
            break
        case 'back':
            content.textContent = ''
            break
        default:
            content.textContent += target.id
    }
})




let operand = {
  one: 4,
  two: 3,
}

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => operator(num1, num2)

console.log(operate(add, operand.one, operand.two))

