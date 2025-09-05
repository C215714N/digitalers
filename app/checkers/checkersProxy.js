export const proxify = (obj, conditions) => new Proxy(obj, conditions)

const pieceProxy = (props) = proxify(new Piece(props), {
    get: (obj, prop) => prop in obj ? obj[prop] : "no encontrado",
    set: (obj, prop, value) => {
        const [{idx, idy},{cx,cy}] = [obj.id, obj.coords]
        if (cx === idx + 1 || cx === idx - 1) obj[prop].x = value.x
        if (cy === idy + 1 || cy === idy - 1) obj[prop].y = value.y
    }
})