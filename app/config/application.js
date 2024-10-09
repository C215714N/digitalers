const { VER, APP, DESC } = process.env;
export const appConfig = {
    appName: APP ?? "digitalers",
    version: VER ?? "0.0.0",
    description: DESC ?? "Proyecto Digitalers realizado con NodeJS",
    author: "Cristian Racedo & Compañia",
    year: new Date().getFullYear(),
    links: [
        {icon: "user", url: "/users", text: "usuarios"},
        {icon: "box-open", url: "/products", text: "productos"},
        {icon: "newspaper", url: "/posts", text: "muro"},
    ],
    styles: [
        'styles/default.css',
        'https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css',
        'https://www.svgrepo.com/show/354119/nodejs-icon.svg',
    ],
    scripts: [
        { url: 'app/index.js', type: 'module' },
        { url: 'https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js' },
    ]
}