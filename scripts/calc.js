/** DECLARACIONES */
const actions = ["CE","C","="];
const numbers = Array.from({length:10},(_,i) => i);
const operations = ["+","-","*","/"];
const calc = {
    n1: 0,
    n2: 0,
    op: "",
};
const calcInput = document.createElement("input");
calcInput.setAttribute("id", "control");
calcInput.setAttribute("type", "number");
/** FUNCIONES */
function render(array, id) {
    const div = document.createElement("div");
    div.setAttribute("id", id);
    array.forEach(item => {
        const btn = document.createElement("button");
        btn.innerHTML = item;
        div.appendChild(btn);
    })
    calculator.appendChild(div);
}    
const reset = () => {
    calc.n1 = 0
    calc.n2 = 0
    calc.op = ""
};
const checkInput = () => calc.op === "" ? "n1" : "n2";
const removeDigit = (key) => calc[key] = parseInt(calc[key] / 10);
const writeNumber = (key, val) => calc[key] = Number(calc[key] + val);
const writeOperation = (value) => calc.op = value;
const calcResults = () => {
    const { n1:a, n2:b, op:p } = calc
    if (operations.find(item => p == item)) calc.n1 = eval(`${a}${p}${b}`)
}
const getResults = () => {
    const {op:signo, n2:x} = calc;
    const [sum, sus, prod, div] = operations;
    switch(signo){
        case sum:   return calc.n1 += x
        case sus:   return calc.n1 -= x
        case prod:  return calc.n1 *= x
        case div:   return calc.n1 /= x
    }
}

/** RENDERIZADO */
calculator.append(calcInput);
render(actions, "actions");
render(numbers, "numbers");
render(operations, "operations");
/** EVENTOS */
calculator.addEventListener('click', (event) => {
    const element = event.target; // elemento cliqueado
    if (element.tagName === "BUTTON") {
        const value = element.innerText;
        const key = checkInput();
        switch (value){
            case "C":
                return removeDigit(key);
            case "CE":
                return reset();
            case "+":
            case "-":
            case "*":
            case "/":
                return writeOperation(value);
            case "=":
                return calcResults();
            default:
                return writeNumber(key, value)
        }
    }
})
calculator.addEventListener('click', event => {
    const btn = event.target.innerText
    const calcInput = calculator.querySelector("input");
    calcInput.value = calc[btn === "=" ? "n1" : checkInput()]
})