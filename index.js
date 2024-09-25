// Importaciones
import 'dotenv/config'; // Lectura de archivo .env
import morgan from 'morgan'; // Registro de solicitudes HTTP
import express from 'express'; // Framework de enrutamiento
import usersRouter from './app/routes/users.js';
// Declaraciones
const { PORT, HOST, DB, APP } = process.env
const app = express()
// Configuracion
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))
// Rutas
app.use('/users', usersRouter)
// Ejecucion
app.listen(PORT ?? 3000, () => console.log("service running on port "+PORT))