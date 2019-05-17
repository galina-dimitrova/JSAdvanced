let manager = (function (){
    const ingredientObj = {protein: 0, carbohydrate:0, fat:0, flavour:0};
    const recipesObj = {
        'apple': {carbohydrate:1,flavour:2},
        'coke': {carbohydrate: 10,flavour:20},
        'burger': {carbohydrate:5, fat:7, flavour:3},
        'omelet': {protein:5, fat:1, flavour: 1},
        'cheverme': {protein:10, carbohydrate: 10, fat: 10, flavour:10}

    }
    const prepareRecipe = (recipe, needQuantity) => {
        const needIngredians =Object.entries(recipesObj[recipe]);
        for (const [ing, qty] of needIngredians) {
            const ingridientStored = ingredientObj[ing]*needQuantity;
            if (qty > ingridientStored) {
                return `Error: not enough ${ing} in stock`
            } 
        }
        for (const [ing, qty] of needIngredians) {
            ingredientObj[ing] -= needQuantity*qty;
        }
        return 'Success';
    }

    return function(input) {
        const tokens = input.split(' ');
        switch (tokens[0]) {
            case 'restock':
                ingredientObj[tokens[1]]+=+tokens[2]
                return 'Success'
                //If do not have
            case 'prepare':
                return prepareRecipe(tokens[1], Number(tokens[2]));
            case 'report':
              return Object.entries(ingredientObj)
                .map((kvp) => `${kvp[0]}=${kvp[1]}`)
                .join(' ');
        }
    }
})()

console.log(manager("restock carbohydrate 10"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare apple 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare burger 1"))
console.log(manager("report"))