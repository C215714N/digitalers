import { getData } from "../async.js"
import { jph } from "../variables.js"

export const Comments = async (id) => {
    let commentData = ""
    const comments = await getData(jph+"/comments?postId="+id)
    comments.forEach(cmnt => commentData += `
    <div class="list-group-item p-3">
        <h4 class="h6">${cmnt.name}</h4>
        <a href="mailto:${cmnt.email}" class="fw-bold">${cmnt.email}</a>
        <p>${cmnt.body}</p>
    </div>`)
    return commentData;
}