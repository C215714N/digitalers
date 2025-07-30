// Declaraciones: Constantes y Variables del Script
    // Variables de Control
    const todos = [];
    let isEdit = false;
    let current = 0;
    // Captura de elementos:
    const input = document.querySelector("#todo_list input");
    const btnAdd = document.querySelector('#todo_list button');

// Funciones: Bloques de codigo que pueden ser invocados y normalmente reciben argumentos
function addTodo(text){
    const newItem = text.trim();
    const exists = todos.find(item => item == newItem);
    if (newItem && !exists) todos.push(newItem);
}
function deleteTodo(index){
    if (index >= 0 && index < todos.length) 
    todos.splice(index,1);
}
function changeTodo(text, index){
    todos[index] = text;
}
function render(){
    const todoList = document.querySelector("#todo_list ul");
    todoList.innerHTML = "";
    todos.forEach(function(item, index){
        const li = document.createElement('li');
        li.setAttribute('class','d-flex flex-wrap flex-center | bg-light r-2 b-1 p-2 m-1');
        li.innerHTML = `
            <div class="w-10 w-sm-7">${item}</div>
            <div class="d-flex w-10 w-sm-3 g-1">
                <button class="w-5 p-1 r-1 bg-none b-info text-info" onclick="editBtn(${index})">Editar</button>
                <button class="w-5 p-1 r-1 bg-none b-danger text-danger" onclick="removeBtn(${index})">Eliminar</button>
            </div>
        `;
        todoList.append(li);
    })
}
// Eventos: Acciones realizadas por el usuario que desencadenan la ejecucion de instrucciones
btnAdd.onclick = () => {
    const text = input.value;
    !isEdit ? addTodo(text) : changeTodo(text, current); // Ternario: expression ? if_true : if_false
    clearInput();
    render();
}
function removeBtn(index){
    const ok = confirm("¿Desea eliminar la tarea? \n" + todos[index]);
    if (ok) deleteTodo(index);
    render();
}
function editBtn(index){
    isEdit = true;
    current = index;
    input.value = todos[current];
    input.focus();
}
function clearInput () {
    isEdit = false;
    input.value = "";
    input.focus();
}