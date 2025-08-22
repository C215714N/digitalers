function NavBarList (arr){
    let template = "";
    arr.forEach(item => template += `<li class="nav-item"><a class="nav-link" href="${item.path}" data-type="${item.type}">${item.text}</a></li>`)
    return template;
}
function NavBar (objArray) {
    const nav = document.createElement('nav');
    nav.setAttribute("class","navbar navbar-expand-lg navbar-dark bg-dark |  p-2");
    nav.innerHTML= `
        <a class="navbar-brand" href="#">AppJS</a>
        <button class="navbar-toggler navbar-toggler-icon | fs-4 border-0"
            data-bs-target="#navbar"
            data-bs-toggle="collapse"></button>
        <ul id="navbar" class="navbar-nav navbar-collapse collapse">
            ${NavBarList(objArray)}
        </ul>`
    root.append(nav);
}
export default NavBar;