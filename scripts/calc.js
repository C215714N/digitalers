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
    result: ''
}
const isButton = ({tagName}) => tagName === "BUTTON"
const renderButtons = (data, parent) => data.forEach((item) => 
    parent.innerHTML+=`<button>${item}</button>`
)
current = () => calc.op != '' ? "numB" : "numA";
addNumber = (n) => calc[current()] += n;
renderNumber = () => viewer.value = calc[current()]
clearNumber = () => calc[current()] = calc[current()].slice(0, -1);
clearEverything = () => calc[current()] = ""

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
    isButton(target) && addNumber(target.innerText);
    renderNumber();
})