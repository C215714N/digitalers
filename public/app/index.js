(() => document.addEventListener('DOMContentLoaded', () => {
    console.log("iniciando aplicacion")
    function req({url, method, body = null}){
        fetch(url, {
            method, 
            headers: { Authentication: "Bearer " + token },
            body
        })
        .then(res => res.json())
    }
    class User{
        payload = {}
        url = `/users/${token}`
        deleteUser(){
            req({ url, method: "DELETE"})
            .then(res => console.log(res))
            .catch(err => console.error(err))
        }
        updateUser(){
            req({ url, method: "PUT", body: JSON.stringify(payload) })
            .then(res => console.log(res))
            .catch(err => console.error(err))
        }
        setPayload(data){
            this.payload = data
        }
    }
}))()