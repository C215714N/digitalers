(() => document.addEventListener('DOMContentLoaded', ()=> {
    console.log('pagina cargada')
    // Declaraciones

    // Funciones

    // Eventos
    document.addEventListener('click', (e) => {
        e.preventDefault()
        console.log("evento click")
    })
    document.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log("evento submit")
    })
}))()