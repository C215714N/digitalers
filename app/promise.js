function getData ({method, url}){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // readyState 0
        xhr.open(method, url); // readyState 1
        // readyState 4
        xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) 
            xhr.status === 200 ?
            resolve(xhr.response) :
            reject(xhr.statusText)
        })
        // readyState 3
        xhr.addEventListener('progress', (ev) => {
            
        })
        xhr.send(); // readyState 2
    })
}

const request = (text = "") => ({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/'+text
})

const apiData = {
    users: null,
    posts: null,
    comments: null,
    albums: null,
    photos: null,
};

getData(request("users"))
    .then(response => JSON.parse(response))
    .then(data => apiData.users = data)
    .catch(error => console.error('Error:', error))
    .finally(() => console.log("datos obtenidos", apiData))

getData(request("posts"))
    .then(response => JSON.parse(response))
    .then(data => apiData.posts = data)
    .catch(error => console.error('Error:', error))
    .finally(() => console.log("datos obtenidos", apiData))

getData(request("comments"))
    .then(response => JSON.parse(response))
    .then(data => apiData.comments = data)
    .catch(error => console.error('Error:', error))
    .finally(() => console.log("datos obtenidos", apiData))