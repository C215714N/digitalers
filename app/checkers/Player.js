export class Player{
    pieces = 12;
    constructor({name, color}){
        this.name = name;
        this.color = color;
    }
    eatenPiece(){
        this.pieces--;
        this.isLoser();
    }
    isLoser(){
        return this.pieces <= 0 && `El Jugador ${this.name} pierde`;
    }
    isWinner(){
        return `¡¡Felicitaciones ${this.name}, has ganado!!`;
    }
}