function Events(){
    function DragStart(e){
        try{
            if(e.target.classList.contains('card')){
                e.dataTransfer.setData('data', e.target.id);
                sessionStorage.setItem('data', e.target.id);
            }
            else Drop(e)
        }
        catch(err){ }
    }
    function DragOver(e){
        e.preventDefault()
    }
    function Drop(e){
        try{
            if(e.target.classList.contains('card-space')){
            e.preventDefault()
            const id = sessionStorage.getItem('data') || e.dataTransfer.getData('data');
            const child = document.getElementById(id)
            e.target.append(child)
        }}
        catch(err){ }
    }
    document.addEventListener('click', DragStart)
    document.addEventListener('dragstart', DragStart)
    document.addEventListener('dragover', DragOver)
    document.addEventListener('drop', Drop)
}
export default Events