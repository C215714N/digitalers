// Importaciones
import path from 'node:path';
import 'dotenv/config'; // Lectura de archivo .env
import morgan from 'morgan'; // Registro de solicitudes HTTP
import express from 'express'; // Framework de enrutamiento
import { engine } from 'express-handlebars';
import usersRouter from './app/routes/users.js';
import { navLinks } from './app/models/navLinks.js'
import { users } from './app/models/userModel.js';
// Declaraciones
const { PORT, HOST, DB, APP } = process.env
const app = express()
const view = path.join(process.cwd(),"views/")
// Configuracion
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))
app.engine('hbs', engine({
    partialsDir:  view+"partials",
    layoutsDir: view+"layouts",
    defaultLayout: view+"index",
    extname: 'hbs'
}))
app.set("view engine", "hbs")
// Rutas
app.use('/users', usersRouter)
app.use("/", (_,res) => res.render('index',{ APP, navLinks, users }))
// Ejecucion
app.listen(PORT ?? 3000, () => console.log("service running on port "+PORT))