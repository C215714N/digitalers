const socket = io()
const messageBox = document.getElementById('message-box');
const chatBox = document.getElementById('chat-box');
const signinForm = document.getElementById('signin');
const loginForm = document.getElementById('login')
// Reinicio de Campos
const resetForm = () => {
    const { usr, msg } = messageBox;
    usr.disabled = true;
    msg.value = "";
    msg.focus()
}
const addMessage = ({id, user, message:msg}) => {
    const isMine = () => user == messageBox.usr.value ? 'current-user' : 'other-users' // Verificacion de Nombre de Usuario
    const message = Object.assign( document.createElement('article'), {
        id,
        className: isMine(),
        innerHTML: `
            <h2>${user}</h2>
            <p>${msg}</p>`
    }); // Creacion de Objeto Mensaje con sus atributos
    chatBox.appendChild(message) // Anidacion de Mensaje
} 
// Recepcion de datos
socket.on("message", addMessage)
socket.on("chat", (arr) => arr.forEach(item => addMessage(item)))
// Envio de Datos
messageBox.addEventListener('submit', (e) => {
    const get = (k) => e.target[k].value // Extraccion de valor de campo
    const user = get('usr').length ? get('usr') : "user_" + socket.id
    e.target.usr.value = user;
    const data = {
        user,
        message: get('msg')
    } // Creacion de Objeto a enviar
    socket.emit("message", data) // Emision de evento mensaje con datos
    resetForm()
})
messageBox.msg.addEventListener('keyup', (e) => {
    const button = messageBox.querySelector('button');  
    if (e.ctrlKey && e.key == "Enter") button.click()
})
// Registro de Usuario
signinForm.addEventListener('submit', (e) => {
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    socket.emit('create', data)
})
// Inicio de sesion
loginForm.addEventListener('submit', (e) => {
    const v = e.target.user.value
    const filter = {$or:[{username:v },{email:v},{phone:v}]}
    socket.emit('find',filter)
})
socket.on("users", (data) => {
    if (!data.length) return window.alert(`Iniciar Sesion \nNo se ha encontrado la cuenta de usuario`)
    messageBox.usr.value = data[0].username
    window.location="#message-box"
})
// Respuestas del Servidor
socket.on('success', ({title,message}) => alert(`${title}\n${message}`))
socket.on('error', ({title,message, errorResponse: {errmsg}}) => alert(`${title}\n${message}\n${errmsg}`))
/** Eventos del Documento */ 
// Carga de Mensaje de Chat
document.addEventListener('DOMContentLoaded', () => socket.emit('load'))
// Evitar Recarga de Navegador
document.addEventListener('submit', (e) => e.preventDefault() )