class List{
    constructor(arr=[]){
        this.arr = arr
        this.size = this.arr.length
    }
    add(element){
        this.arr.push(element);
        this.size = this.arr.length
        return this.arr.sort((a,b)=>a-b);
    }
    remove(index){
        if (index>=0&&index<=this.arr.length-1) {
            this.arr.splice(index, 1);
            this.size = this.arr.length
        return this.arr.sort((a,b)=>a-b);
        }
    }
    get(index){
        if (index>=0&&index<=this.arr.length-1) {
        return this.arr[index];
        }
    }
    
}
let list = new List()
list.add(5);
list.add(3);
// list.remove(0)

console.log(list.arr)
console.log(list.get(0))
console.log(list.size)