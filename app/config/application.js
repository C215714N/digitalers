const { VER, APP, DESC } = process.env;
export const appConfig = {
    appName: APP ?? "digitalers",
    version: VER ?? "0.0.0",
    description: DESC ?? "Proyecto Digitalers realizado con NodeJS",
    author: "Cristian Racedo & Compañia",
    year: new Date().currentYear(),
    links: [
        {icon: "👨‍💼", url: "/users", text: "usuarios"},
        {icon: "📦", url: "/products", text: "productos"},
        {icon: "📰", url: "/posts", text: "muro"},
    ],
    styles: [
        'styles/default.css',
        'https://jsdelivr.net/npm/bootstrap/dist/css/boostrap.min.css',
        'https://www.svgrepo.com/show/354119/nodejs-icon.svg',
    ],
    scripts: [
        'app/index.js',
        'https://jsdelivr.net/npm/bootstrap/dist/js/boostrap.bundle.min.js',
    ]
}