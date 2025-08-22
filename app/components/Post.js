import { HOST } from "../declarations.js"
import getData from "../fetch.js"
import { Comment } from "./Comment.js"

export const Post = async ({id, title, body}) => {
    const fetchedComments = await getData({url: HOST['remote']+`comments?postId=${id}`, headers: {"Content-Type": "application/json"}})
    const comments = fetchedComments.map(c => Comment(c)).join("")
return (`
    <article id="post-${id}" class="card | col-lg-9 m-3 mx-lg-auto">
        <header class="card-header">
            <h3>${title}</h3>
        </header>
        <p class="card-body">${body}</p>
        <footer class="card-footer">
            <h3>Comentarios</h3>
            <form class="col-8 mx-auto p-3">
                <label>nombre</label>
                <input class="form-control"/>
                <label>Comentario</label>
                <textarea class="form-control"></textarea>
                <button class="btn btn-outline-primary | d-block ms-auto">Aceptar</button>
            </form>
            <ul class="list-group list-group-flush | col-8 mx-auto">
                ${comments}
            </ul>
        </footer>
    </article>
`)}