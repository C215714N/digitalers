import { Player } from "./Player.js"
import { pieceProxy as Piece } from "./checkersProxy.js"

export class Game {
    board = []
    players = []

    createBoard(){
    this.board = Array.from({length: 8}, (_, rowId) => 
        Array.from({length: 8}, (_, colId) => 
            (rowId < 3 || rowId > 4) && (rowId % 2 == colId % 2) ? 
            new Piece(rowId, colId, this.players[Number(rowId < 3)].color) : null
        ) )
    }
    addPlayer(player){
        this.players.length < 2 &&
        this.players.push(new Player(player))
    }
}