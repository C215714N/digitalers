import { Clock } from "./Clock.js";

export class Chron extends Clock {
    timeStamps = [];
    markTime(){
        this.timeStamps.push(this.showTime());
    }
    pauseTimer(timer){
        return clearInterval(timer);
    }
    stopTimer(){
        this.HH = 0;
        this.mm = 0;
        this.ss = 0;
    }
}