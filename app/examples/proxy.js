const user = {
    fullname: "cristian racedo",
    username: "c215714n",
    age: 34,
    password: "0303456",
    email: "cristiandracedo@hotmail.com"
}
const methods = {
    get: (obj, prop) => {
        // if (prop === "password") return "no se puede mostrar la contraseña"
        if (prop in obj) return obj[prop];
        return "no existe la propiedad " + prop;
    },
    set: (obj, prop, value) => {
        if (/email|username/.test(prop)) return "no se puede cambiar el usuario o correo asignado"
        if(prop === "password") {
            const {oldPassword:oldPwd, newPassword:newPwd, repeatPassword:chkPwd } = value
            return obj[prop] = obj[prop] === oldPwd && newPwd === chkPwd ? newPwd : obj[prop]
        }
        if (prop === "age"){
            obj[prop] = value > 0 && value < 150 ? value : obj[prop]
        }
        if (prop in obj) obj[prop] = value
        return "no se encontro la propiedad " + prop
    }
}
const userProxy = new Proxy(user, methods)
console.log(userProxy)