var calculator = require("../implementation/calculator");

describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        var calculatorResult = calculator.add('');
        expect(calculatorResult).toBe(0);
    });

    it("should return the number if the string only contains one number", function () {
        var calculatorResult = calculator.add('1');
        expect(calculatorResult).toBe(1);
    });

    it("should return the sum of a comma delimited string with multiple numbers", function () {
        var calculatorResult = calculator.add('1,2,3');
        expect(calculatorResult).toBe(6);
    });

    it("should return the sum of a comma and new line delimited string with multiple numbers", function () {
        var calculatorResult = calculator.add('1,2\n3');
        expect(calculatorResult).toBe(6);
    });

    it("should return the sum of a string which is separated by a single custom delimiter", function () {
        var calculatorResult = calculator.add('//;\n1;2;3');
        expect(calculatorResult).toBe(6);
    });

    it("should throw an exception if a negative number is passed 'negatives not allowed'", function () {
        expect(function(){ calculator.add('1,2,-3') }).toThrow(new Error("negatives not allowed"));
    });

    it("should ignore numbers larger than 1000 when summing", function () {
        var calculatorResult = calculator.add('1,2,3,1001');
        expect(calculatorResult).toBe(6);
    });

    it("should return the sum of a string which is separated by a single custom delimiter of any length", function () {
        var calculatorResult = calculator.add('//[***]\n1***2***3');
        expect(calculatorResult).toBe(6);
    });

    it("should return the sum of a string which is separated by a multiple custom delimiter of a single char in length", function () {
        var calculatorResult = calculator.add('//[*][&]\n1*2&3');
        expect(calculatorResult).toBe(6);
    });

    it("should return the sum of a string which is separated by a multiple custom delimiter of any length", function () {
        var calculatorResult = calculator.add('//[++++][###]\n1++++2###3');
        expect(calculatorResult).toBe(6);
    });
});