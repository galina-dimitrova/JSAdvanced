function printDeckOfCards(cards) {
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
            let error = new Error('Invalid card: ')
            error.card = face+suit;
            throw error;
        }
    }

    try {
        let output = cards.map(x => {
            let card = x.split('');
            let symbol = card.pop();
            return makeCard(card.join(''), symbol)
        });
        console.log(output.join(' '))
    } catch (error) {
        console.log(`Invalid card: ${error.card}`)
    }
    
    
  }
  printDeckOfCards(['5S', '3D', 'QD', '1C']);