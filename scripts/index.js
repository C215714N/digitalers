// Variables
var navButton = document.getElementById('navButton');
var navMenu = document.getElementById('navMenu');
var mapButton = document.getElementById('mapButton');
var mapFrame = document.getElementById('mapFrame');
// Funciones
function toggle(element, className = "active") {
    return element.classList.toggle(className);
}
function replace(element, oldClass, newClass) {
    element.classList.replace(oldClass, newClass);
}
// Implementacion
navButton.onclick = function () { 
    toggle(navMenu) ? 
    replace(navButton, 'icon-toggler', 'icon-close') : 
    replace(navButton, 'icon-close', 'icon-toggler');
}
mapButton.onclick = function () { 
    toggle(mapFrame) ? 
    replace(mapButton, 'icon-expand', 'icon-collapse'): 
    replace(mapButton, 'icon-collapse', 'icon-expand');
}