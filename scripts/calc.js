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
const clear = () => {
    Object.assign(calc, { n1: "", op: "", n2: "" })
    return 0;
}
const clearElement = () => {
    calc.op ? calc.n2 = "" : calc.n1 = ""
    return 0;
}
const setOperation = (symbol) => calc.op = symbol
const calcResult = () => {
    if(calc.op && calc.n2) 
    return calc.n1 = eval(calc.n1+calc.op+calc.n2)
}
const addDigit = (n) => calc.op ? calc.n2+= n : calc.n1+= n
const setDigit = (n) => calc.op ? calc.n2 = n : calc.n1 = n

const setValue = (value) => {
    switch(value){
        // Actiones
        case "C": return clear()
        case "CE": return clearElement()
        case "=": return calcResult()
        // Operaciones
        case "+":
        case "-":
        case "*":
        case "/":
            return setOperation(value)
        // Numeros
        default: return addDigit(value);
    }
}
// Asignacion de Acciones
const setActions = () => {
    const buttons = document.querySelectorAll("button");
    const input = document.querySelector("input");

    input.addEventListener("input", (ev) => setDigit(ev.target.value))
    buttons.forEach(btn => btn.addEventListener("click", (ev) => {
        const value = ev.target.innerText;
        input.value = setValue(value);
    }))
}

// Vistas de Calculadora
renderElement({
    element: "input", 
    props: { id: "input", type: "number" }, 
    parent: root,
})
render(actions,"actions");
render(numbers(), "numbers");
render(symbols, "symbols");
clear();
setActions();