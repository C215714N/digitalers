export class Piece{
    constructor(x,y,color){
        this.id = {x,y};
        this.coord = {x,y};
        this.color = color;
    }
    movePiece(x,y){
        this.coord = {x, y}
    }
}