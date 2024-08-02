const root = document.getElementById("root");
const symbols = ["+","-","*","/"];
const actions = ["CE", "C", "="];

// generador de Arrays
const numbers = (ini=0, fin=9, step=1, arr=[]) => {
    for(let i=ini; i<fin; i+=step) arr.push(i);
    return arr;
}
// Renderizado de botones
const render = (arr, className) => {
    const container = document.createElement("div");
    container.setAttribute("id",className);
    for (let item of arr) container.innerHTML+=`<button>${item}</button>`;
    root.appendChild(container);
}

render(actions,"actions");
render(numbers(), "numbers");
render(symbols, "symbols");