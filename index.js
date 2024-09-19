import { createServer } from 'http'
const PORT = process.env.PORT ?? 3000
const HOST = process.env.HOST ?? "localhost"
const app = createServer( (req, res) => {
    const { url, method } = req
    if (method === "GET"){
        switch(url){
            case "/":
            case "/index":
            case "/index.html":
                res.write("<h1>Bienvenido</h1>")
            break;
            case "/css":
            case "/styles":
            case "/styles.css":
            case "/default.css":
                res.write("body{ margin: 0 }")
            break;
            case "/js":
            case "/scripts":
            case "/app":
            case "/app.js":
            case "/index.js":
                res.write("document.addEventListener('DOMContentLoaded', ()=> console.log('pagina cargada'))")
            break;
            default:
                res.write('Error 404: Ruta no Encontrada')
        }
    }
    if (method === "POST"){
        res.write("enviaste datos")
    }
    res.end()
})

app.listen(PORT, HOST, console.log("service running"))
