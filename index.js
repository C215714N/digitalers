import { join, extname } from 'path'
import { readFile } from 'fs'
import { createServer } from 'http'

import { getContent } from './src/content-types.js'
import { getFile } from './src/paths.js'

const PORT = process.env.PORT ?? 3000
const HOST = process.env.HOST ?? "localhost"
const app = createServer( (req, res) => {
    let content, status=200;
    const { url, method } = req
    const publicDir = process.cwd() + "/public/";
    const file = getFile(url)
    const filePath = join(publicDir + file)
    const headers = getContent(extname(file));
    method === "GET" && readFile(filePath, (err, data) => {
        if (err) {
            status = 404,
            content = "Error 404 Archivo no encontrado"
        }
        else content = data.toLocaleString();
        res.writeHead(status,'', headers)
        res.end(content)
    })
})
app.listen(PORT, HOST, console.log("service running"))