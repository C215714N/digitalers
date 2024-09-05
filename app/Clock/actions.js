import Cron from "./Cron.js";
import Timer from "./Timer.js";

let time, clock = new Cron(0,0,0);
const units = ["H","m","s"];

export const ClickController = (e) => {
    const {id} = e.target
    const p = document.getElementById('time');
    const H = parseInt(document.getElementById('H').value);
    const m = parseInt(document.getElementById('m').value);
    const s = parseInt(document.getElementById('s').value);
    const type = document.querySelector('#clock select');
    clock = type.value == 1 ? new Timer(H,m,s) : new Cron(H,m,s)
    switch(id){
    case "start":
        time = setInterval(()=> {
            p.innerHTML = clock.showTime();
            type.value == 1 ? clock.susTime() : clock.addTime()
        },1000)
    break;
    case "pause":
        units.forEach(u => document.getElementById(u).value = parseInt(clock.get(u)))
        clearInterval(time)
    break;
    case "stop":
        clearInterval(time)
        p.innerHTML = "00:00:00"
        units.forEach(u => document.getElementById(u).value = 0)
    break;
    }
}

export const InputController = ({target:{id, value}}) => 
    /^H|m|s$/.test(id) && clock.set(id,value)
