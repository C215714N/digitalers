import Card from "./Card";

export default class Deck {
    cards:Card[] = [];
    addCards(symbols:string[], icon:object){
        symbols.map(symbol => Array.from({length:13}).map((_,index) => 
            this.cards.push(new Card(
                symbol, 
                index <= 9 ? index + 1 : 10,
                index > 9 || index == 0 ? icon[index] : index + 1
            ))
        ))
    }
    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--){
            const r = Math.floor(Math.random() * i);
            [this.cards[r], this.cards[i]] = [this.cards[i], this.cards[r]]
    }}
}