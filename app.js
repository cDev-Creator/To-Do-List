const addItemButton = document.getElementById('add-item');
const inputField = document.getElementById('input-field');
const tasks = document.querySelector('.tasks');

addItemButton.addEventListener('click', function() {

    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value; 
    tasks.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.color = 'rgba(0, 128, 0, 1)'
    })
    paragraph.addEventListener('dblclick', function() {
        tasks.removeChild(paragraph);
    })
})
