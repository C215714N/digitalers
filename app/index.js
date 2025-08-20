import {method, HOST, navBarList} from "./declarations.js"
import NavBar from "./nav.js";
import getData from "./callback.js";
import handleRender from "./render.js";

document.addEventListener('DOMContentLoaded', () => {
    NavBar(navBarList);

    root.addEventListener('click', (ev) => {
        const { target } = ev
        const { tagName: tag, pathname:path } = target
        ev.preventDefault()
        if (tag === "A"){
            const type = target.dataset.type || "default";
            getData({
                method,
                url: HOST[type] + path,
                callBack: handleRender
            })
        }
    }) 
})