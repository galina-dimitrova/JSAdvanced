const assert = require('chai').assert;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
console.log(rgbToHexColor(255, 255, 255))

describe('rgbToHexColor', function () {
    it('should return Hex color', function () {
        let red = 66;
        let green = 134;
        let blue = 244;
        let result = rgbToHexColor(red, green, blue);
        assert(result, '#4286F4');
    })
    it('should return color for 0,0,0', function () {
        let red = 0;
        let green = 0;
        let blue = 0;
        let result = rgbToHexColor(red, green, blue);
        assert.equal(result, '#000000');
    })
    it('should return color for 255,255,255', function () {
        let red = 255;
        let green = 255;
        let blue = 255;
        let result = rgbToHexColor(red, green, blue);
        assert.equal(result, '#FFFFFF');
    })
    it('should return undefined for invalid range', function () {
        let red = 1;
        let green = 2;
        let blue = 500;
        let result = rgbToHexColor(red, green, blue);
        assert.isUndefined(result);
    })
    it('should return undefined for invalid input', function () {
        let red = 1;
        let green = 2;
        let blue = 'noo';
        let result = rgbToHexColor(red, green, blue);
        assert.isUndefined(result);
    })
    it('should return undefined for invalid integer', function () {
        let red = 1;
        let green = 2;
        let blue = 1.5;
        let result = rgbToHexColor(red, green, blue);
        assert.isUndefined(result);
    })
})