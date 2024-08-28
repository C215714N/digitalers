import { getData } from "./async.js";
import { root, main, links, brand, pub, jph } from "./variables.js";
import Nav from "./components/navigation.js";
// Componentes
import { Post } from "./components/post.js";
import { User } from "./components/user.js";
import { Profile } from "./components/profile.js";
import { Album } from "./components/album.js";
import { Todo } from "./components/todo.js";

root.innerHTML+= Nav(links, brand);

document.addEventListener('click', async (ev) => {
    ev.preventDefault();
    const tag = ev.target.tagName;
    if(tag === "A"){

    }
    if(tag === "BUTTON"){
        if(ev.target.hasAttribute('data-url')){
            const { url, link, component } = ev.target.dataset
            const server = link === "remote" ? jph : link === "local" ? pub : null;
            history.pushState("","", url);
            const data = server && await getData(`${server}/${url}`)
            render(data, component)
        }
    }
})

async function render(data, fn){
    Object.assign(main, {
        className: "row container gap-2 mx-auto p-3",
        innerHTML: ""
    })
    // Verificamos si es un array de datos y luego lo recorremos
    if (Array.from(data).length >= 1){
        data.map(async (d,i) => {
            const currentData = await eval(`${fn}(d)`);
            main.innerHTML+=currentData;
            if ((i + 1) % 3 == 0) main.innerHTML+='<div class="w-100">';
    })}
    // En caso de ser un Objeto lo renderizamos directamente
    else {
        const currentData = await eval(`${fn}(data)`)
        main.innerHTML = currentData;
    }
    root.appendChild(main)
}