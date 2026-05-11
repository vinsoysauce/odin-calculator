const button = document.querySelector('#button-container')
const content = document.querySelector('.content')

content.textContent = 0;

button.addEventListener('click', (event) => {
    let target = event.target
    content.textContent += target.id
})