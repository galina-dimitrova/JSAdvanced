let result = (function(){
    class Card{

        constructor(face, suit){
            const valids = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

            if (valids.includes(face)&&(suit === 'SPADES'||suit === 'HEARTS'||
            suit === 'DIAMONDS' || suit === 'CLUBS')) {
                this._face = face;
                this._suit = suit;
            } else{
                throw  new Error('Invalid input')
            }
           
        }
        get face(){
            return this._face;
        }
        set face(face){
            const valids = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

            if (valids.includes(face)) {
                this._face = face;
            } else{
                throw  new Error('Invalid face')
            }
           
        }
        get suit(){
            return this._suit;
        }
        set suit(suit){
            if (suit === 'SPADES'||suit === 'HEARTS'||
            suit === 'DIAMONDS' || suit === 'CLUBS') {
                this._suit = suit;
            } else{
                throw  new Error('Invalid suit')
            }
        }
    }
    let Suits = { //??
        SPADES: 'SPADES',
        HEARTS: 'HEARTS',
        DIAMONDS: 'DIAMONDS',
        CLUBS: 'CLUBS'
    }

    return {
        Suits:Suits,
        Card:Card
    }
}());
let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.Clubs);
card.face = "A";
card.suit = Suits.DIAMONDS;
let card2 = new Card("0", Suits.DIAMONDS);

console.log(card)
console.log(card2)