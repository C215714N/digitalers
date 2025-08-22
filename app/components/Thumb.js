export const Thumb = ({id, title, url, thumbnailUrl}) => `
    <figure id="tumb-${id}">
        <figcaption>${title}</figcaption>
        <img src="${thumbnailUrl}" alt="${title}" />
    </figure>
`