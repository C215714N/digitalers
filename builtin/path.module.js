const path = require('path')

const absolute = (dir) => path.resolve(dir ?? 'index.js') // ruta absoluta
const current = (file=__filename) => path.parse(file) // separa las partes de la ruta ROOT, DIR, FILE, EXT


module.exports = {
    absolute,
    current,
}