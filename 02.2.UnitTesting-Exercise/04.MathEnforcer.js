let assert = require("chai").assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe("mathEnforcer", function(){
    describe("addFive", function() {
        it("with a non-number parameter, should return correct", function() {
            let num = "ho";
            let result = mathEnforcer.addFive(num);
            assert.isUndefined(result);
        });
        it("with a number parameter, should return correct", function() {
            let num = 3;
            let result = mathEnforcer.addFive(num);
            assert.equal(result, 8);
        });
        it("with a negative number parameter, should return correct", function() {
            let num = -3;
            let result = mathEnforcer.addFive(num);
            assert.equal(result, 2);
        });
        it("with a float point number parameter, should return correct", function() {
            let num = 2.999;
            let result = mathEnforcer.addFive(num);
            assert.closeTo(result, 7.999, 0.001);
        });
    })
    describe("subtractTen", function() {
        it("with a non-number parameter, should return correct", function() {
            let num = "ho"
            let result = mathEnforcer.subtractTen(num);
            assert.isUndefined(result);
        });
        it("with a number parameter, should return correct", function() {
            let num = 3
            let result = mathEnforcer.subtractTen(num);
            assert.equal(result, -7);
        });
        it("with a negative number parameter, should return correct", function() {
            let num = -3
            let result = mathEnforcer.subtractTen(num);
            assert.equal(result, -13);
        });
        it("with a float point number parameter, should return correct", function() {
            let num = 11.999
            let result = mathEnforcer.subtractTen(num);
            assert.closeTo(result, 1.999, 0.01);
        });
    })
    describe("sum", function() {
        it("with a non-number parameters, should return correct", function() {
            let first = "hi";
            let second = "ho";
            let result = mathEnforcer.sum(first, second);
            assert.isUndefined(result);
        });
        it("with a non-number parameter, should return correct", function() {
            let first = "hi";
            let second = 3;
            let result = mathEnforcer.sum(first, second);
            assert.isUndefined(result);
        });
        it("with a non-number parameter, should return correct", function() {
            let first = 3;
            let second = "ho";
            let result = mathEnforcer.sum(first, second);
            assert.isUndefined(result);
        });
        it("with a number parameters, should return correct", function() {
            let first = 3;
            let second = 4;
            let result = mathEnforcer.sum(first, second);
            assert.equal(result,7);
        });
        it("with a negative number parameter, should return correct", function() {
            let first = -3;
            let second = -4;
            let result = mathEnforcer.sum(first, second);
            assert.equal(result,-7);
        });
        it("with a float point number parameter, should return correct", function() {
            let first = 2.11;
            let second = 3.88;
            let result = mathEnforcer.sum(first, second);
            assert.closeTo(result,5.99,0.01);
        });
    })
    
});