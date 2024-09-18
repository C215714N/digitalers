import { 
    readFileSync, 
    writeFileSync, 
    appendFileSync, 
    unlinkSync
} from "fs"
import { resolve } from 'node:path';

const content = process.argv[2] ?? 'datos de texto'
// Leer un Archivo
console.log("iniciando escritura")
const exampleFile = readFileSync('docs/example.txt')
console.log("finalizando escritura")
// Crear un Archivo
console.log("iniciando escritura")
writeFileSync("docs/borrar.txt",'')
console.log("finalizando escritura")
writeFileSync('docs/nuevoArchivo.md', content)
// Agregar Contenido a un Archivo
console.log("iniciando anidacion")
appendFileSync('docs/example.txt', content+"\n\r")
console.log("finalizando anidacion")
// Eliminar un Archivo
console.log("iniciando eliminacion")
unlinkSync('docs/borrar.txt')
console.log("finalizando eliminacion")

console.log(
    "buffer: ", exampleFile,
    "\n string: ", exampleFile.toString())