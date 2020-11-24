const submitForm = document.querySelector('.create');
let todoList = document.querySelector('.container');
// const searchForm = document.querySelector('.search');

const createNewListElement = () => {
    //creating new ul element tag
    if(submitForm.createButton.value != '' && submitForm.createButton.value.length <= 35){
        const newUL = document.createElement('ul');
        newUL.className = 'list-group todos mx-auto text-dark';
        //creating new li element tag
        const newLI = document.createElement('li');
        document.createElement('li')
        newLI.className = 'list-group-item d-flex justify-content-between align-items center font-weight-bold';
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
    }
    else alert('try small sentences yours is ' +  submitForm.createButton.value.length);
    
};

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

submitForm.addEventListener('submit', currentEvent => {
    currentEvent.preventDefault();
    createNewListElement();
});



todoList.addEventListener('click', currentEvent => {
    currentEvent.stopPropagation();
    deleteElementOnClick(currentEvent);
});

// searchForm.addEventListener('keyup', currentEvent => {
//     currentEvent.preventDefault();
//     currentEvent.stopPropagation();
//     currentEvent.preventDefault();
//     const listElements = document.querySelectorAll('span');
//     // todoList = document.querySelector('.container');
//     // console.log(listElements.length);
//     listElements.forEach(currentElement => {
//         console.log(currentElement.textContent.includes(searchForm.searchButton.value));
//     });
//     // console.log(listElements);
// });