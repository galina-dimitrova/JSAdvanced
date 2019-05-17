const assert = require('chai').assert;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('isSymetric', function () {
    it('should return true for symetric array', function () {
        let arr = [1, 2, 1];
        let result = isSymmetric(arr);
        assert.equal(result, true);
    })
    it('should return false for nonsymetric array', function () {
        let arr = [1, 2, 5];
        let result = isSymmetric(arr);
        assert.isNotTrue(result);
    })
    it('should no take string', function () {
        let arr = 'nooo';
        let result = isSymmetric(arr);
        assert.equal(result, false);
    })
    it('should no take óbject', function () {
        let arr = {first: 'first', second: 8};
        let result = isSymmetric(arr);
        assert.equal(result, false);
    })
    it('should take empty array', function () {
        let arr = [];
        let result = isSymmetric(arr);
        assert.equal(result, true);
    })
    it('should no take null', function () {
        let arr = null;
        let result = isSymmetric(arr);
        assert.equal(result, false);
    })
})