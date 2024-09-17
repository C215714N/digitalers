import os from 'os';

function systemInfo(){
    return `
    hostname: ${os.hostname()}
    version: ${os.version()}
    arch: ${os.arch()}
    processor: ${processorData()}
    memory: ${memoryData()}
`
}
function processorData(){
    return os.cpus()[0].model
}
function memoryData(){
    return os.freemem()
}
export default systemInfo