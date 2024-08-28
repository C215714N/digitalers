export const Album = (album) =>
`<div class="col-md m-2 rounded p-3 shadow">
    <p class="fw-bold">${album.title}</p>
    <button class="btn btn-primary"
        data-url="/albums/${album.id}"
        data-link="remote"
        data-component="Photo">
        ver mas
    </button>
</div>`