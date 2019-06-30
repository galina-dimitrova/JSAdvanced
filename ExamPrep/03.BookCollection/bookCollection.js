class BookCollection{
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];

        return this;
    }

    get room(){
        return this._room;
    }
    set room(name){
        if (name==='livingRoom'||name==='bedRoom'||name==='closet') {
            this._room = name;
        } else{
            throw `Cannot have book shelf in ${name}`
        }
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length; //?_
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {bookName, bookAuthor, genre}

        if (this.shelfCondition<=0) {
            this.shelf.shift(); 
        }
        
        this.shelf.push(book);
        this.shelf.sort((a, b)=>a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(b=>b.bookName !== bookName);
        return this;
    }

    showBooks(genre) {
        let result = `Results for search "${genre}":\n`;
        result+= this.shelf
        .filter(b=>b.genre === genre)
        .map(b=> `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`)
        .join('\n');
        return result.trim();
    }

    toString(){
        if (this.shelf.length<=0) {
            return "It's an empty shelf";
        }
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`
            result+= this.shelf
            .map(b => `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`)
            .join('\n');

            return result.trim();
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5);
    livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov")
    livingRoom.addBook("Introduction to Programming with Java", "Avetlin Nakov")
    livingRoom.addBook("Programming for .NET Framework", "Svetlin Nakov", "prgr");
    // livingRoom.throwAwayBook("Introduction to Programming with C#");
    console.log(livingRoom.showBooks("prgr"));
    console.log(livingRoom.shelfCondition);

    console.log(livingRoom.toString());