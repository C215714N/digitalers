import { readFile, writeFile, appendFile, unlink } from "node:fs"

let file;
const content = process.argv[2] ?? ""
// readFile(archivo, callback)
console.log("iniciando lectura", file)
readFile('docs/example.txt', (error, data) => {
    if (error) throw error
    file = data.toString()
    console.log("procesando lectura", file)
})
console.log("lectura finalizada", file)

// writeFile(archivo, contenido, formato, callback)
console.log("iniciando escritura")
writeFile('docs/asyncFile.md', content, 'utf-8', (error) => {
    if (error) throw error
    console.log("escritura procesada")
})
console.log("escritura finalizada")
// appendFile(archivo,contenido, callback)
console.log("iniciando anidacion")
appendFile('docs/example.txt', content, (error) => {
    if (error) throw error
    console.log("anidacion procesada")
})
console.log("anidacion finalizada")
// unlink(archivo, callback)
console.log("iniciando eliminacion")
unlink('docs/example.txt', (error) => {
    if (error) throw error
    console.log("eliminacion procesada")
})
console.log("eliminacion finalizada")