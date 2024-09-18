const { parse } = require('url')

const urlParse = (url) => parse(url)
console.log(urlParse(process.argv[2]))

module.exports = urlParse