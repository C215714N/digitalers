// Importaciones
import 'dotenv/config'; // Lectura de archivo .env
import morgan from 'morgan'; // Registro de solicitudes HTTP
import express from 'express'; // Framework de enrutamiento
import usersRouter from './app/routes/users.js';
import dbConn from './app/config.js';
// Declaraciones
const { PORT, HOST, APP, URI } = process.env
const app = express()
// Configuracion
dbConn(URI ?? `mongodb://${HOST}:27017/${APP}`)
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))
// Rutas
app.use('/users', usersRouter)
app.use(express.static('public'))
// Ejecucion
app.listen(PORT ?? 3000, () => console.log("service running on port "+PORT))