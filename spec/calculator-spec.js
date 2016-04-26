var calculator = require("../implementation/calculator");

describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        var calculatorResult = calculator.add('');
        expect(calculatorResult).toBe(0);
    });
});