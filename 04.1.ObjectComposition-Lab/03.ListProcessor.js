function solve(input){
    let arr = []
    let command = {
        add: function(arr, str){
            arr.push(str);
            return arr;
        },
        remove: function(arr, str) {
            arr = arr.filter(e=> e !== str);
            return arr;
        },
        print: function(){
            console.log(arr.join(','));
            return arr;
        }
    };
    
        for (let e of input) {
            e = e.split(' ');
            arr = command[e[0]](arr, e[1])
        }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
