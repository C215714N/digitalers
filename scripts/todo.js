// Captura de elementos
let todos = [];

function addTodo(text){
    const newItem = text.trim();
    if (newItem) todos.push(newItem);
    render();
}
function deleteTodo(index){
    if (index > 0 && index < todos.length) 
    todos.splice(index,1);
    render();
}
function changeTodo(text, index){
    todos[index] = text;
    render();
}
function render(){
    const todoList = document.querySelector("#todo_list ul");
    todoList.innerHTML = "";
    todos.forEach( function(item){
        const li = document.createElement('li');
        li.innerHTML = `
            ${item} 
            <button class="btn p-1 r-1 bg-none b-info text-info">Editar</button>
            <button class="btn p-1 r-1 bg-none b-danger text-danger">Eliminar</button>
        `;
        todoList.append(li);
    })
}