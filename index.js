// Importaciones
import 'dotenv/config'; // Lectura de archivo .env
import express from 'express'; // Framework de enrutamiento
// Declaraciones
const { PORT, HOST, DB, APP } = process.env
const app = express()
// Configuracion

// Rutas
app.get("/login", (req, res) => res.send(`
    <h1>${APP ?? "EducacionIT"}</h1>
    <form action="/login" method="POST">
        <h2>Iniciar sesion</h2>
        <label for="user">Usuario</label>
        <input id="user" type="text" name="user" required>
        <label for="pass">Contraseña</label>
        <input id="pass" type="password" name="pass" required>
        <button>Inicia Sesion</button>
    </form>
`))
app.post('/login',(req, res) => res.send(
    'datos recibidos'
))
app.use('/', (req, res) => res.json({
    title: APP ?? 'EducacionIT',
    description: "Bienvenido al Sitio",
    version: "1.0.0",
}))
// Ejecucion
app.listen(PORT ?? 3000, () => console.log("service running on port "+PORT))