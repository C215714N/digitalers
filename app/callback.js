function getData({method, url, callBack}){
    const xhr = new XMLHttpRequest(); // readyState 0
    xhr.open(method, url) // readyState 1
    // readyState 0 - 4
    xhr.onreadystatechange = function () {
        console.log(xhr)
        if (xhr.readyState === 4) 
        xhr.status === 200 ? 
            callBack(null, xhr.response) : 
            callBack(xhr, null)
    }
    // readyState 2
    xhr.send()
}
export default getData;