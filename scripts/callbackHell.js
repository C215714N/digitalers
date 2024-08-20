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
        // Convierto a JSON los resultados y los itero
        JSON.parse(posts).forEach( post => {
            ajax({
                url: server+"/users/"+post.userId, // Solicito los datos del usuario que realizo la publicacion
                callback: (user) => {
                    const usr = JSON.parse(user); // Convierto los datos a JSON valido
                    let userData = `
                    <strong>user:</strong> ${usr.name} <br>
                    <strong>email:</strong> ${usr.email}`
                    ajax({
                        url: server+"/comments?postId="+post.id, // Solicito los comentarios de la publicacion
                        callback: (comments) => {
                            let commentsData = "";
                            // Convertimos los resultados a JSON valido
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
})

setTimeout(theWall, 2000);