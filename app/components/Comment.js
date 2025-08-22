export const Comment = ({id, name, email, body}) => `
    <li id="comment-${id}" class="list-group-item">
        <p>
            <strong>${name}</strong>
            <em>${body}</em>
        </p>
        <p>
            Publicado por 
            <a href="mailto:${email}">${email}</a>
        </p>
    </li>
`