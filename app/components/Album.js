import { HOST } from "../declarations.js"
import getData from "../fetch.js"
import { Thumb } from "./Thumb.js"

export const Album = async ({id, title}) => {
    const fetchedPhotos = await getData({url: HOST['remote']+`photos?albumId=${id}`, headers: {"Content-Type": "application/json"}})
    const gallery = fetchedPhotos.map(p => Thumb(p)).join("")
return (`
    <article id="album-${id}">
        <header>
            <h3>${title}</h3>
        </header>
        <section>
            ${gallery}
        </section>
    </article>`
)}