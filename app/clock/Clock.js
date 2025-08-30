export class Clock {
    min = 0;
    max = 59;
    constructor(HH=0,mm=0,ss=0){
        this.HH = HH;
        this.mm = mm;
        this.ss = ss;
    }
    showTime(){
        const { HH, mm, ss, checkFormat:chk } = this;
        return `${chk(HH)}:${chk(mm)}:${chk(ss)}`;
    }
    checkFormat(n){
        return (n >= 0 && n < 10 ) ? `0${n}` : (n >= 10 && n < 60) ? n : `00`
    }
    addTime(){
        const { HH:H, mm:m, ss:s, max } = this
        this.HH = m >= max && s >= max ? H + 1 : H
        this.mm = s >= max ? m + 1 : m
        this.ss = s >= max ? 0 : s + 1
    }
}