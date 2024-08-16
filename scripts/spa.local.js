// Mapeo de links para SPA
const localLinks = document.querySelectorAll('.local-link')
localLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation() // evitamos el bubbling
        e.preventDefault() // evitamos la recarga
        const path = e.target.innerText;
        const file = e.target.href.split("#")[1]
        // Modificacion del Historial
        history.pushState({},'',"/"+path)
        // Ejecucion de Solicitud HTTP
        getData(`/docs/${file}.txt`, render)
    })
})
// Peticiones al Servidor
function getData(url, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4){
        if (xhr.status == 200) callback(xhr.responseText)
        if (xhr.status == 404) callback(notFound())
    }})
    xhr.send()
}
// Carga de Contenido en Pagina
function render(data){
    const main = document.querySelector("main");
    main.innerHTML=`<section>${data}</section>`;
}
// Estructura para Elemento no Encontrado
const notFound = () => `
<h2>
    Nos da vergüenza decirlo <br>
    pero ha ocurrido un Error
</h2>
<p>
    No hemos podido encontrar la pagina solicitada, si el error persiste, comunicate con el administrador del sitio. Para que continues navegando te invitamos a visitar la siguiente <a href="/">direccion</a>
</p>`