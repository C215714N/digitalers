/** IMPORTACIONES */
import { createServer } from "node:http";
import { Server } from "socket.io";
import express from "express";
import * as u from "./src/users.controller.js";
import { dbConn } from "./src/db.config.js";
import { configDotenv } from "dotenv";
/** DECLARACIONES */
configDotenv()
const { 
    PORT = 3000, 
    URI = "mongodb://localhost:27017/digichat" 
} = process.env;
const app = express();
const server = createServer(app);
const ws = new Server(server);
/* CONFIGURACION */
dbConn(URI)
app.use(express.static('public'));
/* WEBSOCKET */
// Conexion de usuarios
ws.on("connection", socket => {
    console.log("Se ha conectado el cliente " + socket.id)
    // Transmision de datos
    socket.on("message", (data) => {
        ws.emit("message", { id: socket.id, ...data} )
    })
    // Carga de Mensajes Anteriores
    socket.on('load', async () => {
        const data = []
        data.length && socket.emit('chat', data)
    })
    // Acciones de Usuario
    socket.on("create", (data) => u.createUser(data, socket))
    socket.on("find", (filter) => u.findUser(filter, socket))
    socket.on("update", (obj) => u.updateUser(obj, socket))
    socket.on("delete", (filter) => u.deleteUser(filter, socket))
    // Desconexion de Usuario
    socket.on("disconnect", () => console.log("Se ha desconectado el cliente " + socket.id))
})
/* EJECUCION */
server.listen(PORT, () => console.log(`servicio ejecutandose`));