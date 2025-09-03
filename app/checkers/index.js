class Game {
    board = []
    players = []

    createBoard(){
    this.board = Array.from({length: 8}, (_, rowId) => 
        Array.from({length: 8}, (_, colId) => 
            (rowId < 3 || rowId > 4) && (rowId % 2 == colId % 2) ? 
            new Piece(rowId, colId, rowId < 3 ? this.players[0].color : this.players[1].color) : null
        ) )
    }
    addPlayer(player){
        this.players.length < 2 && 
        this.players.push(new Player(player))
    }
}
class Player{
    pieces = 12;
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    eatenPiece(){
        this.pieces--
        this.isLoser()
    }
    isLoser(){
        return this.pieces <= 0 && `El Jugador ${this.name} pierde` 
    }
    isWinner(){
        return `¡¡Felicitaciones ${this.name}, has ganado!!`
    }
}
class Piece{
    constructor(x,y, color="black"){
        this.id = {x,y};
        this.coord = {x,y};
        this.color = color;
    }
    movePiece(x,y){
        this.coord = {x, y}
    }
}
const checkers = new Game();

checkers.addPlayer({name: "c215714n", color: "red"})
checkers.addPlayer({name: "John Doe", color: "black"})
checkers.createBoard();
console.log(checkers)