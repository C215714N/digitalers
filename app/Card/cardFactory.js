class Card {
    constructor({number, symbol, suite, color}){
        this.number = number;
        this.symbol = symbol ?? number;
        this.suite = suite;
        this.color = color;
    }
}
class CloverCard extends Card{
    suite = "♣"
    color = "black"
}
class HeartCard extends Card{
    suite = "♥"
    color = "red"
}
class SpadeCard extends Card{
    suite = "♠"
    color = "black"
}
class DiamondCard extends Card{
    suite = "♦"
    color = "red"
}
class CardFactory {
    createCard({type,number, symbol}){
    switch(type){
    case 0:  return new SpadeCard({number, symbol})
    case 1:  return new DiamondCard({number, symbol})
    case 2:  return new CloverCard({number, symbol})
    case 3:  return new HeartCard({number, symbol})
} } }
export default CardFactory