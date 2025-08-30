import { create, renderTime } from "../utils/index.js";

export function clockButtons(clock){
    let start;
    const tag = "button";
    const startBtn = create({
        tag, innerText: "Iniciar Reloj",
        onclick: () => {
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
        onclick: () => clock.pauseTimer(start)
    })
    const stopBtn = create ({
        tag, innerHTML: "Detener Reloj",
        onclick: () => {
            pauseBtn.click();
            clock.stopTimer();
            renderTime(clock);
        }
    })
    return [ startBtn, markBtn, pauseBtn, stopBtn ]
}