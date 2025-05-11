console.log("Hello World!")

const newTodoButton = document.getElementById("new-todo-button");
const todosList = document.getElementById("todos-list");
console.log(newTodoButton, todosList);

function addTodo(list){
    list.innerHTML += `<div class="todoitem">
        <input type="checkbox"/>
        <input type="text"/>
    </div>`;
}

if(newTodoButton || todosList) {
    newTodoButton.onclick = () => {
        addTodo(todosList);
    };
}
