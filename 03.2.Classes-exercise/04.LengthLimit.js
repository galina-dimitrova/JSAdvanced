class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = +length
    }

    increase(length){
            return this.innerLength+=+length;
    }
    decrease(length){         
        if (this.innerLength-length<=0) {
            return this.innerLength = 0
        } else {
            return this.innerLength-=+length;
        }
    }
    toString(){
        if (this.innerString.length<this.innerLength) {
            return `${this.innerString}`
        } else if(this.innerString.length>=this.innerLength) {
            return `${this.innerString.substr(0,this.innerLength)}...`
        } else if(this.innerString.length === 0){
            return '...'
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
