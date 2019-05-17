const assert = require('chai').assert;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('createCalculator', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it('should return 8 for get()', function () {
        
        let result = calc.get();
        assert.equal(result, 0);
    })
    it('should return 8 for add(1), add(3)', function () {
        
        calc.add(1);
        calc.add(3);
        let result = calc.get();
        assert.equal(result, 4);
    })
    it('should return 8 for add(5), add(2)', function () {
        
        calc.add(5);
        calc.subtract(2);
        let result = calc.get();
        assert.equal(result, 3);
    })
    it('should return Nan for add string', function () {
        
        calc.add('noo');
        let result = calc.get();
        assert.isNaN(result);
    })
    it('should add/subtract numbers < 0', function () {
        
        calc.add(-1);
        calc.subtract(-2);
        let result = calc.get();
        assert.equal(result, 1);
    })
})