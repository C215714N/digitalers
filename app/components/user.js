export const User = (user) =>`
<article class="d-flex justify-content-between align-items-center flex-wrap | col-xl-8 | mx-xl-auto border-bottom">
    <header>
        <h3 class="h5 m-0">${user.name}</h3>
        <p>${user.username} <a href="mailto:${user.email}">${user.email}</a></p>
    </header>
    <footer class="btn-group col-12 col-sm-4">
        <button class="btn btn-primary">Ver perfil</button>
        <button class="btn btn-danger">Quitar</button>
    </footer>
</article>`