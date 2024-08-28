export const Todo = (todo) => `
    <article class="d-flex justify-content-between align-items-center flex-wrap | my-1 rounded p-3 shadow-lg">
        <header>
            <h3 class="h6 m-0">${todo.title}</p>
            <p class="h5 text-uppercase ${todo.completed ? "text-decoration-line-through" : "text-decoration-underline"}">${todo.completed ? "finalizada" : "pendiente"}</p>
        </header>
        <footer class="btn-group | position-sticky end-0">
            <button class="btn btn-outline-primary"
                data-url="/todos/${todo.id}"
                data-link="remote"
                data-component="TodoEdit">Editar</button>
            <button class="btn btn-outline-success">Finalizar</button>
            <button class="btn btn-outline-danger">Eliminar</button>
        </footer>
    </article>
`
