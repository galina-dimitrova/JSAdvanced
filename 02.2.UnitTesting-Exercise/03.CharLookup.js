let assert = require("chai").assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("lookupChar", function(){
    it("with incorrect string should return undefined", function() {
        let str = 10;
        let idx = 3
        let result = lookupChar(str, idx);
        assert.isUndefined(result);
    });
    it("with incorrect number should return undefined", function() {
        let str = "hi";
        let idx = "i"
        let result = lookupChar(str, idx);
        assert.isUndefined(result);
    });
    it("with index bigger than lenght should return undefined", function() {
        let str = "hi";
        let idx = 2
        let result = lookupChar(str, idx);
        assert.equal(result, "Incorrect index");
    });
    it("with index smaller than 0 should return undefined", function() {
        let str = "hi";
        let idx = -2
        let result = lookupChar(str, idx);
        assert.equal(result, "Incorrect index");
    });
    it("with float point index should return undefined", function() {
        let str = "hi";
        let idx = 1.56
        let result = lookupChar(str, idx);
        assert.isUndefined(result);
    });
    it("should return true", function() {
        let str = "hi";
        let idx = 1
        let result = lookupChar(str, idx);
        assert.equal(result, "i");
    });
});