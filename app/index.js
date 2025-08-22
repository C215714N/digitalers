import { HOST, CONTENT, navBarList } from "./declarations.js"
import { handleRender, handleRemote } from "./render.js";
import getData from "./fetch.js";
import NavBar from "./components/nav.js";
import * as bootstrap from "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"

document.addEventListener('DOMContentLoaded', () => {
    NavBar(navBarList);

    root.addEventListener('click', (ev) => {
        const { target } = ev
        const { tagName: tag, pathname:path, search } = target
        ev.preventDefault()
        if (tag === "A"){
            const type = target.dataset.type || "default";
            const contentType = CONTENT[type || "default"];
            history.pushState({}, "", path);
            getData({
                url: HOST[type] + path + (search||""), 
                headers: {"Content-Type": contentType} 
            })
            .then( response => type === "local" ? 
                handleRender(null, response) : 
                handleRemote(response)
            )
        }
    })
})