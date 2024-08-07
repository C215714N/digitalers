const root = document.getElementById("root");
const calc = {};
const obj = {
    symbols: ["+","-","*","/"],
    actions: ["CE", "C", "="],
    fn: ["clearElement","clear","calcResult"],
    numbers: numbers()
}
// Generador de Arrays
function numbers (ini=0, fin=9, step=1, arr=[]) {
    for(let i=ini; i<=fin; i+=step) arr.push(i);
    return arr;
}
// Renderizado de ELementos
const renderElement = ({element, props, parent}) => parent.appendChild(Object.assign(document.createElement(element), props))
// Renderizado de botones
const render = (arr, className) => {
    const container = document.createElement("div");
    container.setAttribute("id",className);
    for (let item of arr) container.innerHTML+=`<button>${item}</button>`;
    root.appendChild(container);
}
// Funciones de la Calculadora
const clear = () => (Object.assign(calc, { n1: "", op: "", n2: "" })) && 0
const clearElement = () => (calc.op ? calc.n2 = "" : calc.n1 = "") && 0
const setOperation = (symbol) => (calc.op = symbol) && calc.n1
const calcResult = () => calc.n1 = (calc.op && calc.n2) && eval(calc.n1+calc.op+calc.n2)
const addDigit = (n) => calc.op ? calc.n2+= n : calc.n1+= n
const setDigit = (n) => calc.op ? calc.n2 = n : calc.n1 = n
// Asignacion de Funciones
const setValue = (value) => {
    for (let i=0; i < obj.actions.length; i++) if (obj.actions[i] == value ) return eval(obj.fn[i]+"()")
    for (let s of obj.symbols) if (s==value) return setOperation(value)
    return addDigit(value)
}
// Asignacion de Acciones
const setActions = () => {
    const buttons = document.querySelectorAll("button");
    const input = document.querySelector("input");
    input.addEventListener("input", ({target:{value}}) => setDigit(value));
    buttons.forEach(btn => btn.addEventListener("click", ({target:{innerText}}) => {
        input.value = setValue(innerText); input.focus();
    }))
};
// Vistas de Calculadora
clear();
renderElement({ element:"input", props:{id:"input", type:"number"}, parent:root})
Object.keys(obj).forEach(k=> k!='fn' && render(obj[k],k))
setActions();