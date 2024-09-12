import { root } from "../variables.js";
import { renderCards, renderBoard } from "./render.js";
import Deck from "./Deck.js";
import Events from "./Events.js";

const deck = new Deck()
deck.createDeck()
deck.shuffleDeck()

const section = Object.assign(
    document.createElement('section'),{
    id: "cards",
    innerHTML: `
        <h2>BlackJack</h2>
        <ul class="deck">${renderCards(deck.cards)}</ul>
        <ul class="board">${renderBoard()}</ul>
    `,
})

root.append(section)
Events();