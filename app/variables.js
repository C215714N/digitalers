export const 
    root = document.getElementById('root'),
    main = document.createElement('main'),
    links = [
        { text: "Muro",     url: "/posts",  component: "Post"},
        { text: "Amigos",   url: "/users",  component: "User"},
        { text: "Galeria",  url: "/albums", component: "Album"},
        { text: "Tareas",   url: "/todos",  component: "Todo"},
    ],
    brand = "Digitalers",
    pub = "/docs/",
    jph = "https://jsonplaceholder.typicode.com"
;