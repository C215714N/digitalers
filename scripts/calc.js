const content = {
    viewer: "input",
    actions: ["CE", "C"],
    symbols: ["/", "*", "-", "+", "="],
    numbers: Array.from({length: 10}, (_, index) => index)
}
function renderButtons(data, parent){
    data.forEach((item) => {
        const btn = document.createElement('button');
        btn.innerHTML = item;
        parent.appendChild(btn); 
    })
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