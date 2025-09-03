import { create, renderTime } from "../utils/index.js";

export function clockButtons(clock){
    let start;
    const tag = "button";
    const startBtn = create({
        tag, innerText: "Iniciar Reloj",
        onclick: ({target}) => {
            stopStart(target);
            start = setInterval(() => {
                clock.addTime();
                renderTime(clock)
            }, 1000)
        }
    })
    const markBtn = create({
        tag, innerText: `Agregar Marca`,
        onclick: () => {
            clock.markTime();
            const markList = document.getElementById("marklist");
            markList.innerHTML = clock.timeStamps.map(t => `<li>${t}</li>`).join("");
        }
    });
    const pauseBtn = create({
        tag, innerHTML: "Pausar Reloj",
        onclick: ({target}) => {
            clock.pauseTimer(start);
            start = null;
            stopStart(target);
        }
    })
    const stopBtn = create ({
        tag, innerHTML: "Detener Reloj",
        onclick: ({target}) => {
            clock.pauseTimer();
            clock.stopTimer();
            stopStart(target)
            renderTime(clock);
        }
    })
    const arrayBtns = [ startBtn, markBtn, pauseBtn, stopBtn ]
    const stopStart = (target) => arrayBtns.forEach(btn => btn.disabled = btn === target)
    return arrayBtns
}