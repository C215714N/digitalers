import { HOST } from "../declarations.js"
import getData from "../fetch.js"
import { Comment } from "./Comment.js"

export const Post = async ({id, title, body}) => {
    const fetchedComments = await getData({url: HOST['remote']+`comments?postId=${id}`, headers: {"Content-Type": "application/json"}})
    const comments = fetchedComments.map(c => Comment(c)).join("")
return (`
    <article id="post-${id}">
        <header>
            <h3>${title}</h3>
        </header>
        <p>${body}</p>
        <footer>
            <h3>Comentarios</h3>
            <ul>
                ${comments}
            </ul>
        </footer>
    </article>
`)}