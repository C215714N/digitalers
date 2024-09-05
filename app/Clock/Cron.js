import Clock from "./Clock.js";
class Cron extends Clock{
    base = 0;
    limit = 59;
    timeMarks = []
    lmt(u){ // Verificacion de la unidad con respecto al limite
        return this[u] >= this.limit   
    }  
    addTime () { // Funcion para Agregar Tiempo
        this.timeCount(this.H+1,this.m+1,this.s+1)    
    }
    addTimeMark () { // Crea una marca de Tiempo
        this.timeMarks.push(this.showTime())
    }
    resetTimeMarks () { // Reinicia las marcas de Tiempo
        this.timeMarks = []
    }
}
export default Cron;