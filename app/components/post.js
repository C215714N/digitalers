import { getData } from "../async.js"
import { jph } from "../variables.js"
import { Comments } from "./comment.js";

export const Post = async (post) => {
const userData = await getData(jph+"/users/"+post.userId);
const comments = await Comments(post.id);
return `
    <article class="card | col-md-10 col-xl-8 | mx-auto p-0 | shadow-lg">
        <header class="card-header">
            <h2 class="h3">${post.title}</h2>
            <p>Posted By ${userData.name}</p>
        </header>
        <p class="card-body">${post.body}</p>
        <section class="card-footer">
            <h3 class="h5">Comentarios</h3>
            ${/* CommentsForm()*/ "" }
            <div class="list-group list-group-flush | col-md-8 col-lg-6 | mx-auto">
            ${comments}
            </div>
        </section>
    </article>`
}