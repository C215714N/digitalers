export const Thumb = ({id, title, url, thumbnailUrl}) => `
    <figure id="tumb-${id}" class="col-sm-6 col-md-4 col-lg-3 border border-4 rounded">
        <figcaption>${title}</figcaption>
        <img class="image-thumbnail" src="${thumbnailUrl}" alt="${title}" />
    </figure>
`