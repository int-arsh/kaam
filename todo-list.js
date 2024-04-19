const todoList = [];
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) =>  { // changed to arrow function f(f)
    const { name,dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate} </div>   
      <button onclick="
        todoList.splice(${index},1);
        renderTodoList();
      "class="delete-todo-button">Delete</button>`;
    todoListHTML += html;
  });


  /*for (let i = 0;i<todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate  = todoObject.dueDate;
    const { name,dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate} </div>   
      <button onclick="
        todoObject.splice(${i},1);
        renderTodoList();
      "class="delete-todo-button">Delete</button>`;
    todoListHTML += html;
  }
  */


  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });
  inputElement.value ='';
  renderTodoList();
}