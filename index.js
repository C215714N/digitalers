// Importaciones
import 'dotenv/config'; // Lectura de archivo .env
import morgan from 'morgan'; // Registro de solicitudes HTTP
import express from 'express'; // Framework de enrutamiento

import dbConn from './app/config/database.js';
import { engineConfig } from './app/config/engine.js';

import authRouter from './app/routes/auth.js'
import usersRouter from './app/routes/users.js';

// Declaraciones
const [ app, HOST, { PORT, URI } ] = [ express(), "mongodb://locahost:27017/digitalers", process.env ]
// Configuracion
dbConn(URI ?? HOST)
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))
app.engine('hbs', engineConfig)
app.set('view engine', 'hbs')
// Rutas
app.use('/users', usersRouter)
app.use('/', authRouter)
app.use(express.static('public'))
// Ejecucion
app.listen(PORT ?? 3000, () => console.log("service running on port "+PORT))