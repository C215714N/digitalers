export function eventFunctions(){
    return ({
    onDragStart: (ev) => {
        ev.target.tagName === "IMG" &&
        ev.dataTransfer.setData('id', ev.target.id);
    },
    onDragOver: (ev) => {
        ev.preventDefault();
    },
    onDrop: (ev) => {
        const id = ev.dataTransfer.getData('id')
        const target = document.getElementById(id);
        ev.target.append(target)
    }
})}