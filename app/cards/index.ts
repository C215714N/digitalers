import Deck from "./Deck";

export default function blackJack () {
    const icon = { 0:"A", 10:"J", 11:"Q", 12:"K" };
    const symbols = [ "spade", "heart", "club", "diamond" ]
    const game = new Deck();
    game.addCards(symbols, icon);
    game.shuffle();
    console.log(game);
}