import { HOST } from "../declarations.js"
import getData from "../fetch.js"
import { Thumb } from "./Thumb.js"

export const Album = async ({id, title}) => {
    const fetchedPhotos = await getData({url: HOST['remote']+`photos?albumId=${id}`, headers: {"Content-Type": "application/json"}})
    const gallery = fetchedPhotos.map(p => Thumb(p)).join("")
return (`
    <article id="album-${id}" class="col-md-8 m-3 mx-md-auto p-3">
        <header class="bg-primary text-light p-3 rounded mb-3">
            <h3>${title}</h3>
        </header>
        <section class="row">
            ${gallery}
        </section>
    </article>`
)}