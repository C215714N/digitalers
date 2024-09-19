import { createServer } from 'http'

const PORT = process.env.PORT ?? 3000
const HOST = process.env.HOST ?? "localhost"
const app = createServer( (req, res) => {
    let 
        contentType = 'text', 
        status = 200, 
        content;
    const { url, method } = req
    if (method === "GET"){
        switch(url){
            case "/":
            case "/index":
            case "/index.html":
                contentType = 'text/html'
                content = "<h1>Bienvenido</h1>"
            break;
            case "/css":
            case "/styles":
            case "/styles.css":
            case "/default.css":
                contentType='text/css'
                content = `
                    * {
                        box-sizing: border-box;
                        scroll-behavior: smooth;
                        font-family: Raleway, calibri, sans-serif;    
                    }
                    body {
                        margin: 0 
                    }`
            break;
            case "/js":
            case "/scripts":
            case "/app":
            case "/app.js":
            case "/index.js":
                contentType ='text/js'
                content =`
                document.addEventListener('DOMContentLoaded', ()=> {
                    console.log('pagina cargada')
                })`
            break;
            default:
                status = 404
                contentType= "application/json"
                content = JSON.stringify({
                    code: 404,
                    message: "Not Found",
                    recomendation: "try another route",
                })
        }
    }
    if (method === "POST"){
        res.write("enviaste datos")
    }
    res.writeHead(status, "OK", {'Content-Type': contentType})
    res.write(content)
    res.end()
})

app.listen(PORT, HOST, console.log("service running"))