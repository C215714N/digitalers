import { expect } from "chai"
import * as calc from "./index.js"

// Descripcion general
describe('Funcion sumar de una calculadora', () => {
    let a,b,result;
    // Prueba unitaria
    it('verificamos la suma de los valores 2 y 2', () =>{
        a = b = 2; result = calc.sum(a,b);
        expect(result).to.equal(4) // resultado
    })
    it('utilizamos un numero negativo como -10 con 4', () => {
        a = 4; b = -10; result = calc.sum(a,b)
        expect(result).to.be.a("number")
        expect(result).to.equal(-6)
    })
    it('los valores no deben concatenarse', () => {
        a = "5"; b = 3; result = calc.sum(a,b)
        expect(result).to.not.be.a("string")
    })
    it('no debe permitir el uso de valores no numericos', () => {
        a = "A8"; b = "0xC0"; result = calc.sum(a,b)
        expect(result).be.an("object")
        expect(result).to.have.property('error','valor invalido')
    })
    it('debe procesar los booleanos como numeros', () => {
        a = true; b = true; result = calc.sum(a,b)
        expect(result).to.equal(2);
        expect(result).to.be.a("number")
    })
    it('no debe permitir valores invalidos', () => {
        a = undefined; b = null; result = calc.sum(a,b)
        expect(result).to.not.be.a("number")
        expect(result).to.have.property('error','valor invalido')
    })
    it('que pasa si utilizo menos argumentos', () => {
        a=10; result = calc.sum(a)
        expect(result).to.be.an("object")
    })
})
