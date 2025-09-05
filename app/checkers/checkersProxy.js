import { Piece } from "./Piece.js"
export const proxify = (obj, conditions) => new Proxy(obj, conditions)

// spread operator (Operador de esparcimiento)
export function pieceProxy (...args) {
    return proxify(new Piece(...args), {
    get: (obj, prop) => prop in obj ? obj[prop] : "no encontrado",
    set: (obj, prop, value) => {
        // destructuring (Desestructuracion)
        const [{x:idx, y:idy},{x:cx,y:cy}] = [obj.id, obj.coords]
        if (cx === idx + 1 || cx === idx - 1) obj[prop].x = value.x
        if (cy === idy + 1 || cy === idy - 1) obj[prop].y = value.y
    }
})}