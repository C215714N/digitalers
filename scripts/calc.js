const root = document.getElementById("root");
const symbols = ["+","-","*","/"];
const actions = ["CE", "C", "="];
const calc = {}

// Generador de Arrays
const numbers = (ini=0, fin=9, step=1, arr=[]) => {
    for(let i=ini; i<=fin; i+=step) arr.push(i);
    return arr;
}
// Renderizado de ELementos
const renderElement = ({element, props, parent}) => {
    const tag = document.createElement(element);
    Object.assign(tag, props)
    parent.appendChild(tag);
}
// Renderizado de botones
const render = (arr, className) => {
    const container = document.createElement("div");
    container.setAttribute("id",className);
    for (let item of arr) container.innerHTML+=`<button>${item}</button>`;
    root.appendChild(container);
}
// Funciones de la Calculadora
const clear = () => Object.assign(calc, { n1: "", op: "", n2: "" })
const clearElement = () => calc.op ? calc.n2 = "" : calc.n1 = ""
const setOperation = (symbol) => calc.op = symbol
const calcResult = () => {
    if(calc.op && calc.n2) calc.n1 = eval(calc.n1+calc.op+calc.n2)
}
const addDigit = (n) => calc.op ? calc.n2+=n : calc.n1+=n
const setDigit = (n) => calc.op ? calc.n2 = n : calc.n1 = n

// Vistas de Calculadora
renderElement({
    element: "input", 
    props: { id: "input", type: "number" }, 
    parent: root,
})
render(actions,"actions");
render(numbers(), "numbers");
render(symbols, "symbols");