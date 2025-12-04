let todoList = [];


renderTodos();


function addTodo(){
  const inputElement = document.querySelector(".js-todo-input");

  todoList.push(inputElement.value);

  inputElement.value = '';

  renderTodos();
}

function renderTodos(){
  let allTodos = '';

  for(i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    allTodos += `<p>${todo}</p>`;
  }

  document.querySelector(".js-all-todos").innerHTML = allTodos;
}