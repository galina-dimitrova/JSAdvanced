class Rat {    
    constructor(name){
        this.name = name
        this.unitedRats = []
    }
    
    unite(rat){       
        if (rat instanceof Rat) {
            this.unitedRats.push(rat);
        }
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){  
        let result = `${this.name}\n`;
        this.unitedRats.forEach(rat => {
                result+= `##${rat.name}\n`
        });
        return result;
    }

}


let rat = new Rat("Viktor");
console.log(rat.getRats().length);
