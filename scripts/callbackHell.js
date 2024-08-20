const main = document.querySelector('main');
// Asynchronous Javascript And XML
function ajax({url, method = "get", callback = console.log}){
    const xhr = new XMLHttpRequest();
    xhr.open(method, url)
    xhr.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4) return callback(e.target.response)
    })
    xhr.send()
}
const server = 'https://jsonplaceholder.typicode.com'
// CallBack Hell / Pyramid of Doom
const theWall = () =>
ajax({
    url: server + "/posts", // Solicito las publicaciones
    callback: (posts) => {
        main.innerHTML = '';
        if (Object.keys(posts).length > 2){
            // Convierto a JSON los resultados y los itero
            JSON.parse(posts).forEach( post => {
                ajax({
                    url: server+"/users/"+post.userId, // Solicito los datos del usuario que realizo la publicacion
                    callback: (user) => {
                        const usr = JSON.parse(user); // Convierto los datos a JSON valido
                        let userData;
                        if (Object.keys(usr).length > 2){
                            userData = `
                            <strong>user:</strong> ${usr.name} <br>
                            <strong>email:</strong> ${usr.email}`
                        }
                        else {
                            userData = `
                                <strong>Anonimo</strong> <br>
                                usuario no registrado`
                        }
                        ajax({
                            url: server+"/comments?postId="+post.id, // Solicito los comentarios de la publicacion
                            callback: (comments) => {
                                let commentsData = "";
                                // Convertimos los resultados a JSON valido
                                if(Object.keys(comments).length > 2){
                                    JSON.parse(comments).forEach(comment => {
                                    // Iteramos los comentarios
                                        commentsData += `
                                        <li class="card" id="comment-${comment.id}">
                                            <p class="card-header">
                                                <span class="h4">${comment.name}</span>
                                                <br>
                                                <strong>correo:</strong> ${comment.email}
                                            </p>
                                            <p class="card-body">${comment.body}</p>
                                        </li>`
                                    })
                                }
                                else{
                                    commentsData = `
                                    <p>
                                        Esta publicacion no tiene comentarios aún 
                                        <br> 
                                        Se el primero en comentar.
                                    </p>`
                                }
                                // Por ultimo creamos la publicacion con todos los datos obtenidos
                                main.innerHTML +=`
                                <article class="card m-3" id="post-${post.id}">
                                    <header class="card-header">
                                        <h2>${post.title}</h2>
                                        <p id="user-${post.userId}">
                                            ${userData}
                                        </p>
                                    </header>
                                    <div class="card-body">
                                        <p>${post.body}</p>
                                    </div>
                                    <footer class="card-footer">
                                        <h3>Comentarios</h3>
                                        <ul class="d-grid gap-2">${commentsData}</ul>
                                    </footer>
                                </article>`
                            }
                        })
                    }
                })
            })
        }
        else {
            main.innerHTML = `
                <section>
                    <h2>Lo sentimos</h2>
                    <p>Se ha producido un error al solicitar los datos, revise la direccion o dirijase a la siguiente <a href="/">pagina</a>
                </section>`
        }
    }
})

setTimeout(theWall, 2000);