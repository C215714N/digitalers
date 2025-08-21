import { HOST, CONTENT, navBarList } from "./declarations.js"
import { handleRender, handleRemote } from "./render.js";
import getData from "./fetch.js";
import NavBar from "./nav.js";

document.addEventListener('DOMContentLoaded', () => {
    NavBar(navBarList);

    root.addEventListener('click', (ev) => {
        const { target } = ev
        const { tagName: tag, pathname:path } = target
        ev.preventDefault()
        if (tag === "A"){
            const type = target.dataset.type || "default";
            const contentType = CONTENT[type || "default"];
            history.pushState({}, "", path);
            getData({
                url: HOST[type] + path, 
                headers: {"Content-Type": contentType} 
            })
            .then( response => type === "local" ? 
                handleRender(null, response) : 
                handleRemote(response)
            )
        }
    })
})