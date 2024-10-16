import { createServer } from "http";

const { PORT = 3000, HOST } = process.env
const log = () => console.log(`servicio corriendo ${PORT ?? 3000}`)
interface Method {
    GET:string
    POST:string
    PUT:string
    DELETE:string
}
const actions:Method = {
    GET: "obteniendo datos",
    POST: "procesando datos",
    PUT: "actualizando datos",
    DELETE: "eliminando datos",
}
const app = createServer(({method},res) => {
    let m:string = "";
    const keys:string[] = Object.keys(actions);
    keys.map(k => { if(method === k) m = k})
    res.end(m == "" ? "accion no reconocida" : (actions as any)[m])
})

app.listen(PORT ?? 3000,log)