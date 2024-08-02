// Declaraciones
const galleries = document.querySelectorAll(".gallery-container")
// Funciones
const getActiveItem = (array, className) => {
    for (let item of array)
    // Buscamos el elemento con la clase
    if (item.classList.contains(className)){
        // Quitamos la clase y devolvemos el elemento
        item.classList.remove(className)
        return item
} }
const setActiveItem = (array, type, className="active") => {
    // Identificamos el elemento actual
    const item = getActiveItem(array, className);
    // determinamos cual es el siguiente
    const activeItem = 
        type === "prev" ?
        item.previousElementSibling || item.parentNode.lastElementChild :
        type === "next" ?
        item.nextElementSibling || item.parentNode.firstElementChild :
        array[type]
    // agregamos la clase al elemento
    activeItem.classList.add(className);
}
// Iteracion del Array de galerias
galleries.forEach(gallery => {
    // Identificar elementos de Cada galeria
    const images = gallery.querySelectorAll(".gallery-item");
    const controls = gallery.querySelectorAll(".controls button");
    const buttons = ["prev", "next"]
    // Avanzar y Retroceder
    buttons.forEach(btn => {
        const button = gallery.querySelector(`.${btn}`);
        button.addEventListener("click", () => {
            setActiveItem(images, btn);
            setActiveItem(controls, btn);
        })
    })
    // Boton de Seleccion
    controls.forEach((ctrl,index) => ctrl.addEventListener("click", () => {
        setActiveItem(images,index)
        setActiveItem(controls,index)
    }))
})