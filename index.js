// Importaciones
import 'dotenv/config'; // Lectura de archivo .env
import morgan from 'morgan'; // Registro de solicitudes HTTP
import express from 'express'; // Framework de enrutamiento
import usersRouter from './app/routes/users.js';
import { navLinks } from './app/models/navLinks.js'
import { users } from './app/models/userModel.js';

// Declaraciones
const { PORT, HOST, DB, APP } = process.env
const app = express()
// Configuracion
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs")
// Rutas
app.use('/users', usersRouter)
app.use("/", (_,res) => res.render('index',{ APP, navLinks, users }))
// Ejecucion
app.listen(PORT ?? 3000, () => console.log("service running on port "+PORT))