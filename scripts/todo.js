// Declaraciones
const 
tareas = ["html", "css", "js"],
d = document,
textoTareas = d.getElementById("textoTareas"),
botonTareas = d.getElementById("botonTareas"),
listaTareas = d.getElementById("listaTareas");

// Funciones
function agregarTarea (text){
    tareas.push(text);
}
function editarTarea(text,index){
    tareas[index] = text;
}
function eliminarTarea(index){
    tareas.splice(index, 1);
    crearListaTareas();
}
function crearListaTareas(){
    listaTareas.innerHTML=""
    for(let i = 0; i < tareas.length; i++){
        listaTareas.innerHTML += `
        <li class='list-group-item | d-flex justify-content-center align-items-center'>
            <span class="w-50">${tareas[i]}</span>
            <button class="btn btn-primary" onclick="elegirTarea(${i})">Editar</button>
            <button class="btn btn-danger" onclick="eliminarTarea(${i})">Eliminar</button>
        </li>`
    }
}
// Eventos

// Invocaciones
crearListaTareas();