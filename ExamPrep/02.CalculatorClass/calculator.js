let assert = require("chai").assert;

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof(this.expenses[i]) === 'number') {
                if (i === 0 || divide === undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            } else {
                return this.expenses.sort().join(', ');
            }
        } else return 'empty';
    }
};

describe("calculator", function() {
    let calculator;
    beforeEach(function(){
        calculator = new Calculator();
    });

    describe("constructor tests", function () {
        it("should initialize", function(){
            assert.isArray(calculator.expenses)
            assert.isEmpty(calculator.expenses);
        })
        
    })
    describe("add data tests", function () {
        it("should add primitive data", function(){
            calculator.add(5);
            calculator.add('txt');
            calculator.add(1.5);
            calculator.add(true);
            assert.deepEqual(calculator.expenses, [5, 'txt', 1.5, true])
        })
        it("should add reference", function(){
            calculator.add({key:'value'});
            calculator.add([1]);
            assert.deepEqual(calculator.expenses, [{key:'value'}, [1]])
        })
    })
    describe("divide nums tests", function () {
        it("should divide 2 nums", function(){
            calculator.add(6)
            calculator.add(2)
            assert.equal(calculator.divideNums(), [3])
        })
        it("should divide 3 nums", function(){
            calculator.add(6)
            calculator.add(2)
            calculator.add(3)
            assert.equal(calculator.divideNums(), [1])
        })
        it("should not divide", function(){
            calculator.add('yes')
            calculator.add('no')
            assert.throw(()=> calculator.divideNums(),"There are no numbers in the array!")
        })
        it("should divide 2 floats", function(){
            calculator.add(6,5)
            calculator.add(2)
            assert.closeTo(calculator.divideNums(), 3.25, 0.01)
        })
        it("should not divide with 0", function(){
            calculator.add(6,5)
            calculator.add(0)
            assert.equal(calculator.divideNums(), 'Cannot divide by zero')
        })
    })
    describe("toString tests", function () {
        it("should have correct output", function(){
            calculator.add(6)
            calculator.add(2)
            assert.equal(calculator.toString(), "6 -> 2")
        })
        it("should empty array", function(){
            assert.equal(calculator.toString(), "empty array")
        })
    })
    describe("orderBy tests", function () {
        it("should order nums", function(){
            calculator.add(6)
            calculator.add(2)
            assert.equal(calculator.orderBy(), "2, 6")
        })
        it("should order mix", function(){
            calculator.add({})
            calculator.add([1,2,3])
            calculator.add('pesho');
            assert.equal(calculator.orderBy(), "1,2,3, [object Object], pesho")
        })
    })
});

