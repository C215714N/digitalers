import { Player } from "./Player.js"
import { Piece } from "./Piece.js"

export class Game {
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