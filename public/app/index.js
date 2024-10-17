const socket = io()
const messageBox = document.getElementById('message-box');
const chatBox = document.getElementById('chat-box');
// Reinicio de Campos
const resetForm = () => {
    const { usr, msg } = messageBox;
    usr.disabled = true;
    msg.value = "";
    msg.focus()
}
// Recepcion de datos
socket.on("message", ({user, message:msg}) => {
    const isMine = () => user == messageBox.usr.value ? 'current-user' : 'other-users' // Verificacion de Nombre de Usuario
    const message = Object.assign( document.createElement('article'), {
        className: isMine(),
        innerHTML: `
            <h2>${user}</h2>
            <p>${msg}</p>`
    }); // Creacion de Objeto Mensaje con sus atributos
    chatBox.appendChild(message) // Anidacion de Mensaje
})
// Envio de Datos
messageBox.addEventListener('submit', (e) => {
    e.preventDefault() // Evitamos la recarga de la pagina
    const get = (k) => e.target[k].value // Extraccion de valor de campo
    const data = {
        user: get('usr'),
        message: get('msg')
    } // Creacion de Objeto a enviar
    socket.emit("message", data) // Emision de evento mensaje con datos
    resetForm()
})
messageBox.msg.addEventListener('keyup', (e) => {
    const button = messageBox.querySelector('button');  
    if (e.ctrlKey && e.key == "Enter") button.click()
})