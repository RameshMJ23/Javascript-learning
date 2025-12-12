let todoList = [];

renderTodos();

document.querySelector('.js-add-button')
  .addEventListener('click', () => addTodo());

function addTodo(){
  const todoInput = document.querySelector(".js-todo-input");
  const dateInput = document.querySelector(".js-date-input");
  const name = todoInput.value;
  const date = dateInput.value;

  // todoList.push({
  //   name: todoInput.value,
  //   date: dateInput.value
  // });
  // ^ shorthand property
  todoList.push({
    name,
    date
  });

  todoInput.value = '';
  dateInput.value = '';

  renderTodos();
}

function renderTodos(){
  let allTodos = '';

  for(i = 0; i < todoList.length; i++){
    const todo = todoList[i];

    // const todoName = todo.name;
    // const todoDate = todo.date;
    // destructuring
    const {name, date} = todo;

    allTodos += `
      <div>${name}</div> 
      <div>${date}</div>
      <button class="delete-button js-delete-button">Delete</button>
    `;
  }

  document.querySelector(".js-all-todos").innerHTML = allTodos;

  //querySelectorAll fetches all the elements that have 'js-delete-button'
  //Only when it have valid element, the iteration happens and eventListeners are added
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButtonElem, index) =>{
      deleteButtonElem
        .addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodos(); 
        });
  });
}