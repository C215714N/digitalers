// Declaraciones
const 
tareas = [],
d = document,
textoTareas = d.getElementById("textoTareas"),
botonTareas = d.getElementById("botonTareas"),
listaTareas = d.getElementById("listaTareas");

let selected;
// Funciones
function agregarTarea (text){
    tareas.push(text);
}
function editarTarea(text,index){
    tareas[index] = text;
}
function elegirTarea(index){
    textoTareas.value = tareas[index];
    selected = index;
    textoTareas.focus();
}
function mostrarTarea(index){
    const textoModal = d.querySelector(".modal-body");
    selected = index;
    textoModal.innerText = tareas[selected];
}
function limpiar(){
    selected = null;
    textoTareas.value="";
}
function eliminarTarea(index){
    tareas.splice(index, 1);
    crearListaTareas()
}
function confirmar(){
    const text = textoTareas.value;
    if (selected != null) editarTarea(text, selected)
    else agregarTarea(text)
    crearListaTareas()
    limpiar()
}
function callActions(){
    const items = listaTareas.querySelectorAll("li");
    items.forEach((item)=> item.onclick = () => item.querySelector("span").classList.toggle("fa-check"))
}
function crearListaTareas(){
    listaTareas.innerHTML=""
    for(let i = 0; i < tareas.length; i++){
        listaTareas.innerHTML += `
        <li class='list-group-item | d-flex justify-content-center align-items-center'>
            <p class="w-50 mb-0">${tareas[i]} <span class="ms-3 | fa"></span></p>
            <button class="btn btn-primary" onclick="elegirTarea(${i})">Editar</button>
            <button 
                class="btn btn-danger" 
                data-bs-toggle="modal" 
                data-bs-target="#modalTareas"
                onclick="mostrarTarea(${i})">
                Eliminar
            </button>
        </li>`
    }
    callActions()
}
// Eventos
botonTareas.addEventListener("click", confirmar)
textoTareas.addEventListener("keyup", (event) => {
    if(event.key === "Enter") confirmar()
})