const submitForm = document.querySelector('.create');
const todoList = document.querySelector('.container');

const createNewListElement = () => {
    //creating new ul element tag
    const newUL = document.createElement('ul');
    newUL.className = 'list-group todos mx-auto text-dark';
    //creating new li element tag
    const newLI = document.createElement('li');
    document.createElement('li')
    newLI.className = 'list-group-item d-flex justify-content-between align-items center';
    //creating new span element tag
    const newSpan = document.createElement('span');
    newSpan.textContent = submitForm.createButton.value;
    //creating enw i element tag
    const newI = document.createElement('i');
    newI.className = 'far fa-minus-square delete';
    //appending span and i tag onto li tag
    newLI.appendChild(newSpan);
    newLI.appendChild(newI);
    //apending li tag onto ul tag
    newUL.appendChild(newLI);
    //appending ul tag onto todolist
    todoList.appendChild(newUL);
    submitForm.createButton.value = '';
};

submitForm.addEventListener('submit', currentEvent => {
    currentEvent.preventDefault();
    createNewListElement();
});

const deleteElementOnClick = currentEvent =>{
    if(currentEvent.target.tagName == 'I'){
        todoList.removeChild(currentEvent.target.parentNode.parentNode);
    }
    else if(currentEvent.target.tagName == 'SPAN'){
        if(currentEvent.target.style.textDecoration == '')
            currentEvent.target.style.textDecoration = 'line-through';
            else currentEvent.target.style.textDecoration = '';
    }
};
todoList.addEventListener('click', currentEvent => {
    currentEvent.stopPropagation();
    deleteElementOnClick(currentEvent);
});
