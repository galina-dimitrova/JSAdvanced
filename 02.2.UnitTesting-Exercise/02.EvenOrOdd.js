let assert = require("chai").assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven", function(){
    it("should return odd", function() {
        let input = "hello";
        let result = isOddOrEven(input);
        assert.equal(result, "odd");
    });
    it("should return even", function() {
        let input = "hi";
        let result = isOddOrEven(input);
        assert.equal(result, "even");
    });
    it("should no taken empty string", function() {
        let input = [9, 0, 6];
        let result = isOddOrEven(input);
        assert.isUndefined(result);
    });
});