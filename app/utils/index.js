export function create({tag, ...props}){
    const element = document.createElement(tag)
    return Object.assign(element, props)
}
export function renderTime(clock){
    const section = document.getElementById("clock");
    section.innerHTML = clock.showTime();
}