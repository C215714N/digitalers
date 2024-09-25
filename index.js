// Importaciones
import 'dotenv/config'; // Lectura de archivo .env
import express from 'express'; // Framework de enrutamiento
import usersRouter from './app/routes/users.js';
// Declaraciones
const { PORT, HOST, DB, APP } = process.env
const app = express()
// Configuracion

// Rutas
app.use('/users', usersRouter)
// Ejecucion
app.listen(PORT ?? 3000, () => console.log("service running on port "+PORT))