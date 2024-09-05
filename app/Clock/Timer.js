import Clock from "./Clock.js";
class Timer extends Clock{
    base = 59;
    limit = 0;
    message = "Se acabo el tiempo"
    constructor(H,m,s,alarm){
        super(H,m,s)
        this.alarm = alarm;
    }
    lmt(u){ // Verificacion de la unidad con respecto al limite
        return this[u] <= this.limit   
    }  
    susTime () { // Funcion para sustraer tiempo
        this.timeCount(this.H-1, this.m-1, this.s-1)
    }
    showMessage () { 
        return`${this.alarm}: ${this.message}`
    }
}
export default Timer;