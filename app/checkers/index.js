import { Game } from "./Game.js";

const checkers = new Game();

checkers.addPlayer({name: "c215714n", color: "red"})
checkers.addPlayer({name: "John Doe", color: "black"})
checkers.createBoard();
console.log(checkers)