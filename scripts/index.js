/* Declaraciones */
var menuButton = document.getElementById('menu-button');
var menuList = document.getElementById('menu-list');

/* Funciones */
function toggle(element,className="active"){
    return element.classList.toggle(className);
}

/* Eventos */
menuButton.onclick = () => toggle(menuList)