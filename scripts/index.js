/* Declaraciones */
var menuButton = document.getElementById('menu-button');
var menuList = document.getElementById('menu-list');
var mapFrame = document.querySelector('iframe.map');
var mapButton = document.querySelector('button.map');

/* Funciones */
function toggle(element,className="active"){
    return element.classList.toggle(className);
}

/* Eventos */
menuButton.onclick = () => toggle(menuList)
mapButton.onclick = () => toggle(mapFrame)