// Importaciones
import 'dotenv/config'; // Lectura de archivo .env
import morgan from 'morgan'; // Registro de solicitudes HTTP
import express from 'express'; // Framework de enrutamiento
import usersRouter from './app/routes/users.js';
// import postsRouter from './app/routes/posts.js';
// import productsRouter from './app/routes/products.js';
import dbConn from './app/config/database.js';
import { appConfig } from './app/config/application.js'
import { engineConfig } from './app/config/engine.js';
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
// app.use('/products', productsRouter)
// app.use('/posts', postsRouter)
app.use('/', (req, res) => res.render('./layouts/home', { ...appConfig }))
app.use(express.static('public'))
// Ejecucion
app.listen(PORT ?? 3000, () => console.log("service running on port "+PORT))