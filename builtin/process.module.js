function getArgs(arr = process.argv, n = 2){
    return arr.filter((_,i)=> i >= n)
}
function getEnv(key){
    return process.env[key]
}
export default {
    getArgs,
    getEnv,
}