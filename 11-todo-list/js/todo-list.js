let todoList = JSON.parse(
  localStorage.getItem('todolist')
)|| [];

renderTodos();

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

  setLocalStorage();

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
      <button onclick = "
        todoList.splice(${i}, 1);
        setLocalStorage();
        renderTodos();  
      " class="delete-button">Delete</button>
    `;
  }

  document.querySelector(".js-all-todos").innerHTML = allTodos;
}

function setLocalStorage(){
  localStorage.setItem(
    'todolist', JSON.stringify(todoList)
  );
}