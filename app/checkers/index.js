import { create } from "../utils/index.js";
import { Game } from "./Game.js";
import { eventFunctions } from "./eventFunctions.js";

export default function checkersGame(){
    const checkers = new Game();
    const {onDragStart, onDragOver, onDrop} = eventFunctions()

    checkers.addPlayer({name: "c215714n", color:"red"});
    checkers.addPlayer({name: "John Doe", color:"black"});
    checkers.createBoard();

    const board = create({
        tag: "section", id: "board", class: "board",
    })
    checkers.board.flat().forEach((item, id) => {
        const box = create({
            tag: "div", id: Math.floor(id/8)+"-"+id%8,
            className: Math.floor(id/8) % 2 === id%8 % 2 ? "odd": "even",
            innerHTML: item && `<img
                id=${"img-"+item.id.x+"-"+item.id.y}
                class="checker ${item.color}"
                src="assets/images/checker.svg"
                data-x="${item.coord.x}"
                data-y="${item.coord.y}" 
                draggable
            />`})
        board.appendChild(box);

        box.addEventListener('dragstart', onDragStart)
        box.addEventListener('dragover', onDragOver)
        box.addEventListener('drop', onDrop)
    })
    console.log(checkers);
    root.append(board);
}
