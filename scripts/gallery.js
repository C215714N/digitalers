// Declaraciones
const galleries = document.querySelectorAll(".gallery-container")

// Funciones
const getActiveItem = (array, type, className="active") => {
    let nextItem;
    for (let i = 0; i < array.length; i++){
        if (array[i].classList.contains(className)){
            array[i].classList.remove(className)
            switch(type){
                case "prev":
                nextItem = i > 0 ? array[i-1] : array[array.length - 1];
                break;
                case "next":
                nextItem = i < array.length - 1 ? array[i+1] : array[0]
                break;
                default: 
                nextItem = array[type]
        } } } 
    nextItem.classList.add(className);
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
            getActiveItem(images, btn);
            getActiveItem(controls, btn);
        })
    })
    // Boton de Seleccion
    controls.forEach((ctrl,index) => ctrl.addEventListener("click", () => {
        getActiveItem(images,index)
        getActiveItem(controls,index)
    }))
})