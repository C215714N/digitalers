import CardFactory from "./cardFactory.js";
const royal = ["A","J","Q","K"];
const cf = new CardFactory()
class Deck {
    cards = []
    createDeck(){
        Array.from({length:4}, (_,type) => {
        Array.from({length:9}, (_,i) => this.cards.push(
            cf.createCard({ type, number: i + 2 })
        ))
        royal.map((symbol)=> this.cards.push(
            cf.createCard({ type, symbol, number: symbol === "A" ? 11 : 10 })
        ))
    })}
    shuffleDeck(){
        for(let i = this.cards.length - 1; i > 0; i--){
            const r = Math.floor(Math.random() * i + 1)
            const cardA = this.cards[i], cardB = this.cards[r]
            this.cards[r] = cardA
            this.cards[i] = cardB
        }
        console.log(this.cards)
    }
    getDeck (){
        return this.cards;
    }
}
export default Deck;