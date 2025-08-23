const table = document.querySelector("table");
const btnList = document.querySelectorAll("button,img");

btnList.forEach(btn => {
    btn.addEventListener('dragstart', (ev) => {
        ev.dataTransfer.setData('id', ev.target.id);
    })
})
table.querySelectorAll("td").forEach(cell => {
    cell.addEventListener('dragover', (ev) =>{
        ev.preventDefault()
    })
})
table.addEventListener('drop', (ev) => {
    const id = ev.dataTransfer.getData('id');
    const tag = document.getElementById(id);
    ev.target.append(tag)
})