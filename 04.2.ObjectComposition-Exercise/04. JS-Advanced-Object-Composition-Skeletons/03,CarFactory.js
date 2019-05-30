function solve(obj){
    return { model: obj.model,
            engine: calcVolume(obj),
            carriage: { type: obj.carriage,
                        color: obj.color },
            wheels: setWheels(obj.wheelsize) }
    function calcVolume(obj) {
        if (obj.power<=90) {
            return { power: 90,
                volume: 1800};
        } else if(obj.power<=120){
            return { power: 120,
                volume: 2400};
        } else {
            return { power: 200,
                volume: 3500};
        }
    }
    function setWheels(size) {
        if (size%2 === 0) {
            return [size-1, size-1, size-1, size-1];
        } else {
            return [size, size, size, size];
        }
    }
}
console.log(JSON.stringify(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })))