/* Declaraciones */
const todos = [
    "Aprender CSS",
    "Aprender SASS",
    "Aprender JAVA",
    "Aprender Bootstrap",
];
const todoInput = document.getElementById("todoText");
const todoAddBtn = document.getElementById("todoAdd");
const todoList = document.getElementById("todoList");
const invalidFeedback = `Debe corroborar que se cumplan los siguientes requisistos: 
 - El texto no puede estar vacio
 - Debe contener por lo menos 3 caracteres`;
/* Funciones */
function addTodo(data) {
    const text = data.trim();
    if (text == "" || text.length < 3) return alert(invalidFeedback);
    todos.push(text);
    todoInput.value = "";
    renderTodos();
}
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
function renderTodos() {
    todoList.innerHTML = "";
    for(let i = 0; i < todos.length; i++) {
        // Creacion del Boton Eliminar
        const todoDelBtn = document.createElement("button");
        todoDelBtn.className = "btn btn-danger btn-sm float-end";
        todoDelBtn.innerText = "Eliminar";
        todoDelBtn.onclick = () => deleteTodo(i);
        // Creacion del Elemento de Lista
        const li = document.createElement("li");
        li.className = "list-group-item list-group-item-action";
        li.innerText = todos[i];
        // Anidacion de elementos
        todoList.appendChild(li);
        li.appendChild(todoDelBtn);
    }
}
/* Eventos */
todoAddBtn.onclick = () => addTodo(todoInput.value);
renderTodos();