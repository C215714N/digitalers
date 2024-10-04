export const sum = (a,b) => {
    a = Number(a); b = Number(b)
    if (isNaN(a) || isNaN(b)) return { error: "valor invalido" }
    return a + b
}