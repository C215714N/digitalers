import { getData } from "./async.js";
import { root, main, links, brand, pub, jph } from "./variables.js";
import Nav from "./components/navigation.js";

root.innerHTML+= Nav(links, brand);

document.addEventListener('click', (ev) => {
    ev.preventDefault();
    const tag = ev.target.tagName;
    if(tag === "A"){

    }
    if(tag === "BUTTON"){
        if(ev.target.hasAttribute('data-url')){
            const { url, link } = ev.target.dataset
            const server = link === "remote" ? jph : link === "local" ? pub : null;
            history.pushState("","", url);
            const data = server ? getData(`${server}/${url}`) : null

            render(data, url)
        }
    }
})

function render(){
    const content = document.createDocumentFragment();
    
    main.appendChild(content)
    root.appendChild(main)
}