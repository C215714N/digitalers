/** IMPORTACIONES */
import { createServer } from "node:http";
import { Server } from "socket.io";
import express from "express";
/** DECLARACIONES */
const { PORT = 3000 } = process.env;
const app = express();
const server = createServer(app);
const ws = new Server(server);
/* CONFIGURACION */
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
    // Desconexion de Usuario
    socket.on("disconnect", () => console.log("Se ha desconectado el cliente " + socket.id))
})
/* EJECUCION */
server.listen(PORT, () => console.log(`servicio ejecutandose`));