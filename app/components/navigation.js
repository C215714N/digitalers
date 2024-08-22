const Nav = (array, brand) => `
<nav class="navbar navbar-dark bg-dark bg-gradient sticky-top py-2 px-3">
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
    for (let item of array) links +=`<li><a class="nav-link" href="${item.link}">${item.text}</a></li>`
    return links;
}
export default Nav;