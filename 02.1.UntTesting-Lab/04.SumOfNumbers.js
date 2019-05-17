const assert = require('chai').assert;
const expect = require('chai').expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe('sum', function () {
    it('should work properly', function () {
        let arr = [1, -2, 5];
        let result = sum(arr);
        assert.equal(result, 4);
    })
    it('scould no take no numbers in array', function () {
        let arr = [1, 'two', 5];
        let result = sum(arr);
        assert.isNaN(result);
    })
    it('should no take a string', function () {
        let arr = 'nooo';
        let result = sum(arr);
        assert.isNaN(result);
    })
    it('should no take a empty array', function () {
        let arr = null;
        let result = sum(arr);
        assert.isNaN(result);
    })
})