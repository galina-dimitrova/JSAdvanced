let assert = require('chai').assert;

class Warehouse {

    get capacity() {
        return this._capacity;
    }

    set capacity(givenSpace) {

        if (typeof givenSpace === 'number' && givenSpace > 0) {
            return this._capacity = givenSpace;
        } else {
            throw `Invalid given warehouse space`;
        }
    }

    constructor(capacity) {
        this.capacity = capacity;
        this.availableProducts = {'Food': {}, 'Drink': {}};
    }

    addProduct(type, product, quantity) {

        let addedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
        let output;

        if (addedQuantity >= 0) {

            if (this.availableProducts[type].hasOwnProperty(product) === false) {
                this.availableProducts[type][product] = 0;
            }

            this.availableProducts[type][product] += quantity;
            output = this.availableProducts[type];

        } else {
            throw `There is not enough space or the warehouse is already full`;
        }

        return output;
    }

    orderProducts(type) {

        let output;
        let sortedKeys = Object.keys(this.availableProducts[type])
            .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);

        let newObj = {};

        for (let product of sortedKeys) {

            if (newObj.hasOwnProperty(product) === false) {
                newObj[product] = 0;
            }

            newObj[product] += this.availableProducts[type][product];
        }

        this.availableProducts[type] = newObj;
        output = this.availableProducts[type];

        return output;
    }

    occupiedCapacity() {

        let output = 0;
        let productsCount = Object.keys(this.availableProducts['Food']).length +
            Object.keys(this.availableProducts['Drink']).length;

        if (productsCount > 0) {

            let quantityInStock = 0;

            for (let type of Object.keys(this.availableProducts)) {

                for (let product of Object.keys(this.availableProducts[type])) {

                    quantityInStock += this.availableProducts[type][product];
                }
            }

            output = quantityInStock;
        }

        return output;
    }

    revision() {

        let output = "";

        if (this.occupiedCapacity() > 0) {

            for (let type of Object.keys(this.availableProducts)) {
                output += `Product type - [${type}]\n`;
                for (let product of Object.keys(this.availableProducts[type])) {
                    output += `- ${product} ${this.availableProducts[type][product]}\n`;
                }
            }
        } else {
            output = 'The warehouse is empty';
        }

        return output.trim();
    }

    scrapeAProduct(product, quantity) {

        let type = Object.keys(this.availableProducts).find(t =>          Object.keys(this.availableProducts[t]).includes(product));
        let output;

        if (type !== undefined) {

            if (quantity <= this.availableProducts[type][product]) {
                this.availableProducts[type][product] -= quantity;
            } else {
                this.availableProducts[type][product] = 0;
            }

            output = this.availableProducts[type];

        } else {
            throw `${product} do not exists`;
        }

        return output;
    }
}

describe('test warehouse', function() {
    let warehouse;
    beforeEach(function(){
        warehouse = new Warehouse(5);
    });

    describe("constructor tests", function() {
        it("shoud inicialize", function() {
           
            assert.equal(warehouse._capacity, 5)
        });
        it("should throw string", function() { // ??? 
            assert.deepEqual(new Warehouse(-5), Error('Invalid given warehouse space'))
        });
    });
    describe("add Product tests", function() {
        it("should add", function() {
            assert.deepEqual(warehouse.addProduct('Food','apple', 3), {'apple': 3})
        });
        it("should sum", function() {
            warehouse.addProduct('Food','apple', 1)
            assert.deepEqual(warehouse.addProduct('Food','apple', 2), {'apple': 3})
        });
        it("should throw string for full", function() {
            let expect = warehouse.addProduct('Food','apple', 6)
             assert.throw(expect, 'There is not enough space or the warehouse is already full')
         });
    });
    describe("order products", function() {
        it("should sort", function() {
            warehouse.addProduct('Food','apple', 1)
            warehouse.addProduct('Food','mango', 3)
            assert.deepEqual(warehouse.orderProducts('Food'), {'mango':3, 'apple': 1})
        });
    });
    describe("occupied capacity", function() {
        it("should sort", function() {
            warehouse.addProduct('Food','apple', 1)
            warehouse.addProduct('Food','mango', 3)
            assert.equal(warehouse.occupiedCapacity(),4)
        });
    });
    describe("revision", function() {
        it("revision with products", function() {
            warehouse.addProduct('Food','apple', 1)
            warehouse.addProduct('Food','mango', 3)
            let outp = 'Product type - [Food]\n- apple 1\n- mango 3\nProduct type - [Drink]'
            assert.equal(warehouse.revision(),outp)
        });
        it("revision without products", function() {
            
            let outp = 'The warehouse is empty'
            assert.equal(warehouse.revision(),outp)
        });
    });
    describe("scrape a product", function() {
        it("scrape product", function() {
            warehouse.addProduct('Food','apple', 1)
            warehouse.addProduct('Food','mango', 3)
            warehouse.scrapeAProduct('mango', 1)
            let outp = 'Product type - [Food]\n- apple 1\n- mango 2\nProduct type - [Drink]'
            assert.equal(warehouse.revision(),outp)
        });
        it("scrape product if not exist", function() {
            warehouse.addProduct('Food','apple', 1)

            let outp = 'kiwi do not exists'
            assert.throw(warehouse.scrapeAProduct('kiwi',4),outp)
        });
    });
})