function getData({method, url, callBack}){
    const xhr = new XMLHttpRequest(); // readyState 0
    xhr.open(method, url) // readyState 1
    // readyState 0 - 4
    xhr.onreadystatechange = function () {
        xhr.readyState === 4 && 
        xhr.status === 200 ? 
            callBack(null, xhr.responseText) : 
            callBack(xhr, null)
    }
    xhr.onprogress = function (ev) {
        ev.lengthComputable && 
        callBack(null, `<progress min="0" max="1" value="${ev.loaded / ev.total}">`)
    }
    // readyState 2
    xhr.send()
}
export default getData;