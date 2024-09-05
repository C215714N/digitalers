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
export default Clock;