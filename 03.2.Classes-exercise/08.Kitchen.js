class Kitchen{
    constructor(budget){
        this.budget = +budget;
        this.menu = [];
        this.productsInStock = [];
        this.actionsHistory = [];
    }

    loadProducts(products){
        products.forEach(element => {
            let prodName = element.split(' ')[0];
            let prodQuantity = +element.split(' ')[1];
            let prodPrice = +element.split(' ')[2];
            if (this.budget>=prodPrice) {
                this.budget-=prodPrice;
                if (this.productsInStock[prodName]) {
                    this.productsInStock[prodName] += prodQuantity
                } else{
                    this.productsInStock[prodName] = prodQuantity
                }
                this.actionsHistory.push(`Successfully loaded ${prodQuantity} ${prodName}`)
            } else{
                this.actionsHistory.push(`There was not enough money to load ${prodQuantity} ${prodName}`)
            }
        });
        return this.actionsHistory.join('\n')+'\n'
    }

    addToMenu(meal, neededProducts, price){
        
        // let products = []
        // neededProducts.forEach(element =>{
        //     let neededProdName = element.split(' ')[0];
        //     let neededProdQuantity = element.split(' ')[1];
        //     products[neededProdName] = neededProdQuantity;
        // })
        // let menuMeal = {meal:meal, 
        //     neededProducts: products, 
        //     price: price}

            if (this.menu[meal]) {
                return `The ${meal} is already in our menu, try something different.`
            } else{
                this.menu[meal] = {products:neededProducts, price:+price}
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
    }

    showTheMenu(){
        let output = []
        for (let key of Object.keys(this.menu)) {
            output.push(`${key} - $ ${this.menu[key].price}`)
        }
        if (output.length === 0) {
            return `Our menu is not ready yet, please come later...`
        } else {
            return output.join('\n')+'\n'
        }
    }

    makeTheOrder(meal){
        function checkInStock(products,stock) {
            let have = true
            products.forEach(element => {
                let name = element.split(' ')[0];
                let need = +element.split(' ')[1];               
                if (!stock[name]|| stock[name]<need) {
                    have = false
                }                               
            });
            return have
        }
        function removeFromStock(products, stock) {
            
            products.forEach(element => {
                let name = element.split(' ')[0];
                let need = +element.split(' ')[1];               
                stock[name] -= need                              
            });
            return stock
        }
        if (this.menu[meal]) {
            if (checkInStock(this.menu[meal].products, this.productsInStock)) {               
                this.productsInStock = removeFromStock(this.menu[meal].products, this.productsInStock);
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        } else{
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 1 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder(null));