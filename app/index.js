import { getData } from "./async.js";
import { root, links, brand } from "./variables.js";
import Nav from "./components/navigation.js";

root.innerHTML+= Nav(links, brand);

document.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log("hiciste click")
    const tag = ev.target.tagName;

    if(tag === "A"){
        
    }
})