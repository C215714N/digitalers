// Asynchronous Javascript And XML
function fetchData(url, method = "get"){
    // Creamos una funcion que recibe 2 funciones como parametros
    return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4) 
            // Resolve se ejecuta cuando tiene estado FULLFILED
            if (xhr.status === 200) return resolve(xhr.response)
            // Reject se ejecuta cuando tiene estado REJECTED
            if (xhr.status === 404) return reject(xhr.response)
    })
    xhr.send()
})}
// Ejecutamos la funcion
fetchData("https://jsonplaceholder.typicode.com/users")
    // resolve: accion cuando se resuelve
    .then((usersJSON) => JSON.parse(usersJSON))
    // resolve: siguiente accion, si no ocurrio error alguno
    .then((usersData) => usersData.forEach(user => console.log(user))) 
    // rejected: en caso que ocurra un error
    .catch((error) => console.log(error)) 