const Nav = (array, brand) => `
<nav class="navbar navbar-dark navbar-expand-md bg-dark bg-gradient sticky-top py-2 px-3">
    <a class="navbar-brand" href="#">${brand}</a>
    <button class="navbar-toggler navbar-toggler-icon" 
        data-bs-target=".navbar-nav" 
        data-bs-toggle="collapse">
    </button>
    <ul class="navbar-nav navbar-collapse collapse">
        ${menuList(array)}
    </ul>
</nav>`
function menuList(array, links=""){
    for (let item of array) links +=`
    <li>
        <button class="nav-link" 
            data-url="${item.url}" 
            data-link="remote"
            data-component="${item.component}">
            ${item.text}
        </button>
    </li>`
    return links;
}
export default Nav;