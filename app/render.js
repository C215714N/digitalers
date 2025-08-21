import { getSection, getComponent } from "./utils.js";
export const handleError = (obj) => `
    <h2>Error ${obj.status} ${obj.statusText}</h2>
    <p>
        Ha ocurrido un error y no se pudo llevar a cabo la accion <br>
        Pruebe otra cosa o intente nuevamente mas tarde
    </p>`
export const handleRender = (err, content) => {
    const section = getSection();
    section.innerHTML = err ? handleError(err) : content;
}
export const handleRemote = (data) => {
    const section = getSection();
    const path = location.pathname;
    const Render = getComponent(path);
    data.forEach(item => section.innerHTML += Render(item))
}