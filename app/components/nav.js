function NavBarList (arr){
    let template = "";
    arr.forEach(item => template += `<li><a href="${item.path}" data-type="${item.type}">${item.text}</a></li>`)
    return template;
}
function NavBar (objArray) {
    const nav = document.createElement('nav');
    nav.innerHTML= `
        <a href="#">AppJS</a>
        <button></button>
        <ul>
            ${NavBarList(objArray)}
        </ul>`
    root.append(nav);
}
export default NavBar;