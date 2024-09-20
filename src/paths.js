export const urls = [
    {
        paths: ["","index.html","home","inicio","index"],
        file: "index.html",
    },
    {
        paths: ["styles","default.css","styles.css","css/styles.css","index.css"],
        file: "default.css",
    },
    {
        paths: ["scripts","index.js","scripts.js","app.js","scripts/app.js"],
        file: "scripts.js",
    },
] 
export const getFile = (path) => 
    urls.map(({paths, file}) => paths
    .map(p => path === `/${p}` && file)).flat()
    .filter(item => item !== false)[0] ?? path