const assert = require('chai').assert;

function solve(arr,firstIdx, secondIdx) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (firstIdx<0) {
        firstIdx = 0
    }
    if (secondIdx>=arr.length) {
        secondIdx = arr.length-1
    }
    if (arr.length === 0) {
        return 0;
    }
    return arr
    .slice(firstIdx, secondIdx+1)
    .map(Number)
    .reduce((a,b) => a+b);
    
}
console.log(solve([], 1, 2))

describe('solve', function () {
    it('should work properly', function () {
        let arr = [1, 2, 3, 4, 5];
        let result = solve(arr, 2, 4);
        assert.equal(result, 12);
    })
    
})