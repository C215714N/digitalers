class Player{
    constructor(name='player'){
        this.name = name;
        this.score = 0;
    }
    newGame(){
        this.ammount = 1000
        this.money = 0
        this.message = ''
    }
    bet(n){
        if(n <= this.ammount) {
        this.ammount -= n;
        this.money += n
    }}
    win(){
        this.next(this.money * 2)
        this.message= "felicitaciones, has ganado"
    }
    loss(){
        this.next(this.money * -1)
        this.message = "lo sentimos, perdiste"
    }
    draw(){
        this.next(this.money)
        this.message = "se ha declarado un empate"
    }
    next(n){
        this.ammount += n
        this.money = 0
    }
}