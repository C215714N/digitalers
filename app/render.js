const handleError = (obj) => `
    <h2>Error ${obj.status} ${obj.statusText}</h2>
    <p>
        Ha ocurrido un error y no se pudo llevar a cabo la accion <br>
        Pruebe otra cosa o intente nuevamente mas tarde
    </p>`
const handleRender = (err, content) => {
    const section = root.querySelector("section") || document.createElement("section");
    section.innerHTML = err ? handleError(err) : content;
    root.append(section)
}
export default handleRender