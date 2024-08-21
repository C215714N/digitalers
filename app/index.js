import { getData } from "./async.js"

const showResults = async() => {
    const results = await getData("https://jsonplaceholder.typicode.com/users")
    console.log(results)
}

console.log(showResults())