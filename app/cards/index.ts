class Card{
    symbol:string;
    value:number;
    icon:string;

    constructor(symbol:string, value:number, icon:string){
        this.symbol = symbol
        this.value = value
        this.icon = icon
    }
}
type icon = Record<number,string>;
class Deck {
    cards:Card[] = []
    addCards(symbols:string[], icon:any){
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
        }
    }
}
class Player{
    name:string
    score = 0;
    money = 1000;
    bet = 0;

    constructor(name:string){
        this.name = name;
    }
    makeBet(n:number){
        if (n <= this.money){
            this.bet += n;
            this.money -=n
        }
    }
    draw(n:number){
        this.score += n;
        this.check();
    }
    check(){
        if(this.score === 21)return "tenemos un ganador"
        if(this.score > 21) return "has perdido"
        return "¿desea continuar?"
    }

}
export default function blackJack () {
    const icon = { 0:"A", 10:"J", 11:"Q", 12:"K" };
    const symbols = [ "spade", "heart", "club", "diamond" ]
    const game = new Deck();
    game.addCards(symbols, icon);
    game.shuffle();
    console.log(game);
}