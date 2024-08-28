const contact = ["email", "phone", "website", "company"];
export const Profile = (data) => `
<article class="card">
    <header class="card-header">
        <h2>${data.name}</h2>
        <p>
            <strong>${data.username}</strong>
            <a href="mailto:${data.email}">${data.email}</a>
        </p>
    </header>
    <div class="card-body | row">
        <div class="col-lg">
            <h3>Datos Personales</h3>
            <ul class="list-group list-group-flush">
            ${listKeys(data.address)}
            </ul>
        </div>
        <div class="col-lg">
            <h3> Datos de Contacto </h3>
            <ul class="list-group list-group-flush"> ${listKeys(data, contact)}</ul>
        </div>
    </div>
    <footer class="card-footer">
        <button onclick="history.back()">Volver</button>
    </footer>
</article>
`;
const listKeys = (obj, keys = null, data = "") => {
    if(!keys) Object.entries(obj).map(([a,b]) => data+=listItem(a,b))
    else keys.map(k => data+=listItem(k,obj[k]))
    return data
}
const listItem = (a,b) => `
<li class="list-group-item">
    <strong>${a}</strong>: ${
        typeof b == "object" ? 
        `<ul class="list-group list-group-flush">
            ${listKeys(b)}
        </li>`: 
    b}
</li>`