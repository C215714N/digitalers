export const 
    method = "GET", 
    HOST = {
        local: "/assets/content/",
        remote: "https://jsonplaceholder.typicode.com/",
        default: ""
    },
    CONTENT = {
        local: "text/html",
        remote: "application/json",
        default: "text/plain"
    },
    navBarList = [
        { text: "Metodos", path: "methods", type: "local" },
        { text: "Estados", path: "states", type: "local" },
        { text: "Codigos", path: "status", type: "local" },
        { text: "Error", path: "error", type: "local" },
        { text: "Usuarios", path: "users", type: "remote" },
        { text: "Publicaciones", path: "posts", type: "remote" },
        { text: "Galeria", path: "albums", type: "remote" }
    ]