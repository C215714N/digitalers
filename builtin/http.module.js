import http from 'http';

http 
// Definicion del servidor Web
.createServer((request, response) => {
    // Se realiza una peticion
    console.log(`se envio una peticion a la direccion: ${request.url} utilizando el metodo ${request.method}`)
    // Se envia una respuesta
    response.end('Bienvenido al Sitio')
})
// Puerto en el que se escucharan peticiones
.listen(8080,'localhost',console.log('Server Running'))