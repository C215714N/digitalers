export const User = ({id, name, username, email, phone, website}) => 
    `<article id="user-${id}">
        <header>
            <h3>${name} (${username})</h3>
            <a href="mailto:${email}">${email}</a>
        </header>
        <address>
            <p><strong>Telefono: </strong>${phone}</p>
            <p><strong>Sitio Web: </strong>${website}</p>
        </address>
        <footer>
            <a href="/users/${id}" data-type="local-method">Ver Perfil</a>
        </footer>
    </article>`;