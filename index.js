/** IMPORTACIONES */
import { createServer } from "node:http";
import { Server } from "socket.io";
import express from "express";
import * as u from "./src/users.controller.js";
import { dbConn } from "./src/db.config.js";
import { configDotenv } from "dotenv";
import { createMessage, loadMessage } from "./src/message.controller.js";
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
    socket.on("message", (data) => createMessage(data, ws)) 
    socket.on('load', () => loadMessage({}, socket))
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