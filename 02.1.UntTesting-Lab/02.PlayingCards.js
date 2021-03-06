function makeCard(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        'S':'\u2660', 
        'H':'\u2665', 
        'D':'\u2666', 
        'C': '\u2663'};

        if (faces.includes(face)&&suits[suit]) {
            let card = {
                face:face, 
                suit:suits[suit],
                toString: function() {
                    return this.face+this.suit;
                }
            }
            return card.toString();
        } else {
        throw new Error('Error')
    }
    
}
console.log('' + makeCard('10', 'H'));