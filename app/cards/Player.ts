export default class Player{
    name:string
    score = 0;
    money = 1000;
    bet = 0;

    constructor(name:string){
        this.name = name;
    }
    makeBet(n:number){
        if (n <= this.money){
            this.bet += n;
            this.money -=n
        }
    }
    draw(n:number){
        this.score += n;
        this.check();
    }
    check(){
        if(this.score === 21) return "tenemos un ganador"
        if(this.score > 21) return "has perdido"
        return "¿desea continuar?"
    }

}