export const User = async ({id, name, username, email, phone, website}) => 
    `<article id="user-${id}" class="card m-3 col-md-6 mx-md-auto">
        <header class="card-header">
            <h3>${name} (${username})</h3>
            <a href="mailto:${email}">${email}</a>
        </header>
        <address class="card-body mb-0">
            <p class="m-0"><strong>Telefono: </strong>${phone}</p>
            <p class="m-0"><strong>Sitio Web: </strong>${website}</p>
        </address>
        <footer class="card-footer">
            <a class="btn btn-primary" 
                href="/users/${id}" 
                data-type="local-method">
                Ver Perfil
            </a>
        </footer>
    </article>`;