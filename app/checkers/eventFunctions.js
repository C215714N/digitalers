export const eventFunctions = () => ({  
    dragstart: (ev) => {
        ev.target.tagName === "IMG" &&
        ev.dataTransfer.setData('id', ev.target.id);
    },
    dragover: (ev) => {
        ev.preventDefault();
    },
    drop: (ev) => {
        const {target:t} = ev
        const id = ev.dataTransfer.getData('id')
        const target = document.getElementById(id);
        
        !t.childNodes.length && 
        t.tagName === "DIV" &&
        t.append(target)
    }
})