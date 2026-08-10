const content = {
    viewer: "input",
    actions: ["CE", "C"],
    symbols: ["/", "*", "-", "+", "="],
    numbers: Array.from({length: 10}, (_, index) => index)
}
const calc = {
    numA: '',
    numB: '',
    op: '',
    result: '',
}
const isButton = ({tagName}) => tagName === "BUTTON";
const renderButtons = (data, parent) => data.forEach((item) => 
    parent.innerHTML+=`<button>${item}</button>`
);
const current = () => {
    const { op, result } = calc
    return result ? "result" : op ? "numB" : "numA";
}
const addNumber = (n) => 
    calc[current()] += n;
const setOperation = (symbol) => calc.op = symbol
const renderNumber = () =>
    viewer.value = calc[current()]
const clearNumber = () => 
    calc[current()] = calc[current()].slice(0, -1);
const clearEverything = () => 
    Object.keys(calc).forEach((k) => calc[k] = '');
const calcOperation = () => {
    const { numA, numB, op } = calc;
    calc.result = eval(`${numA} ${op} ${numB}`);
    calc.numA = calc.result
}

function renderSection([id, data]){
    const eval = typeof data === "object";
    const section = document.createElement(eval ? "section" : data);
    section.setAttribute("id", id);
    if (!eval) section.setAttribute("type", "number")
    else renderButtons(data, section);
    root.appendChild(section);
}
Object.entries(content).forEach((el) => renderSection(el))
numbers.addEventListener('click', ({target}) => {
if (isButton(target)) {
    const {innerText:n} = target;
    (n >= 0 && n <= 9) && addNumber(n);
    renderNumber();
}})
symbols.addEventListener('click', ({target}) => {
if (isButton(target)){
    const {innerText:op} = target;
    const calcs = content.symbols.slice(0, -1);
    calcs.map(s => op === s && setOperation(s));
    op === "=" && calcOperation();
    renderNumber();
}})
actions.addEventListener('click', ({target}) => {
if (isButton(target)) {
    const { innerText:txt } = target;
    txt === "CE" && clearEverything();
    txt === "C" && clearNumber();
    renderNumber();
}})