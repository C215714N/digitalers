import {HOST, method, navBarList} from "./declarations.js"
import NavBar from "./nav.js";
import getData from "./callback.js";
import handleRender from "./render.js";

NavBar(navBarList);
document.addEventListener('click', (ev) => {
    ev.preventDefault()
    if (ev.target.tagName === "A" && ev.target.pathname != "/")
        getData({
            method,
            url: HOST + ev.target.pathname,
            callBack: handleRender
        })
})