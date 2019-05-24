(function solve() {
    let id = 0;
    class Extensible{
        constructor(){
            this.id = id++;
        }
        extend(template){  //??

            for (const key in template) {
                let val = template[key];

                if (typeof template[key] =='function') {
                    Extensible.prototype[key] = val;
                } else{
                    this[key] = val;
                }
            }
        }
    }
    return Extensible
})()
