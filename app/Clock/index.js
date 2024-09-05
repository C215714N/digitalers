class Clock {
    base;
    limit;
    constructor(H,m,s){
        this.H = H,
        this.m = m,
        this.s = s
    }
// Getters: Metodos que se utilizan para Obtener valores
    showTime(){ // Tiempo formateado
        return `${this.get(this.H)}:${this.get(this.m)}:${this.get(this.s)}`
    }
    lmt(u){ // Verificacion de la unidad con respecto al limite
        return this[u] === this.limit   
    }    
    get(u){ // Unidad con cero decimal a la izquierda
        return u < 10 ? `0${u}` : u 
    }
// Setters: metodos que se utilizan para asignar valores
    set(u,n){ // Nuevo valor para la unidad
        this[u] = n 
    }                    
    reset(u){ // Reestablece la unidad a su valor base
        this.set(u,this.base) 
    };        
    hCount(n){ // Definicion de Hora segun base y limit
        this.set("H",n) 
        this.reset("m")
        this.reset("s")
    }
    mCount(n){ // Definicion de Minuto segun base y limit
        this.set("m",n)
        this.reset("s")
    }
    timeCount(H,m,s){ // Conteo de Segundos segun los base y limit
        if(this.lmt("m") && this.lmt("s")) this.hCount(H);
        else if(this.lmt("s")) this.mCount(m);
        else this.set("s", s)
    }
}
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