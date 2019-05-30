function solve(obj){
    return { weight: obj.weight,
        experience: obj.experience,
        bloodAlcoholLevel:  calcAlc(obj),
        handsShaking: false }
        function calcAlc(obj) {
            if (obj.handsShaking === true) {
                return obj.bloodAlcoholLevel+=0.1*Number(obj.weight)*Number(obj.experience);
            } else{ 
                return obj.bloodAlcoholLevel
            }
        }
}
console.log(solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }))