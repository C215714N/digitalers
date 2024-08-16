// Asynchronous Javascript And XML
function ajax({url, method = "get", callback = console.log}){
    // 0 Inicilizacion de Solicitud 
    const xhr = new XMLHttpRequest();
    // 1 Carga de peticion
    xhr.open(method, url)
    // 2-4 Escuchadores de cambio
    xhr.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4){
            if(e.target.status >= 400) 
                return callback("ha ocurrido un error")
            return callback(e.target.responseText)
        }
    })
    // 2 Procesamiento de la solicitud
    xhr.send()
}