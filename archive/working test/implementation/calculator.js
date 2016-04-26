exports.add = function (numbers) {
    if (numbers === '')
        return 0;

    return sum(numbers);
};

function sum(numbers) {
    if (numbers.startsWith('//')) {
        return sumWithCustomDelimeters(numbers);
    } else {
        return sumWithNoCustomDelimeters(numbers)
    }
}

function sumNumbersOfArray(arrayOfNumbers) {
    var sum = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += throwErrorForNegativeNumber(
            ignoreNumbersLargerThan1000(
                parseInt(arrayOfNumbers[i])
            )
        );
    }
    return sum;
}

function throwErrorForNegativeNumber(number) {
    if (number < 0)
        throw new Error("negatives not allowed");

    return number;
}

function ignoreNumbersLargerThan1000(number) {
    if (number > 1000)
        return 0;

    return number;
}

function sumWithNoCustomDelimeters(numbers) {
    var splitNumbers = numbers.split(/[\n,]+/);

    return sumNumbersOfArray(splitNumbers);
}

function sumWithCustomDelimeters(numbers) {
    var delimiterAndNumbers = numbers.split('\n'),
        delimiter = getCustomDelimiter(delimiterAndNumbers[0].replace('//', '')),
        numbersFromOriginalString = delimiterAndNumbers[1];

    var splitNumbers = new Array();

    if (delimiter.length > 1) {
        splitNumbers = splitByMultiDelimeters(numbersFromOriginalString, delimiter);
    } else {
        splitNumbers = splitOnSingleDelimiter(numbersFromOriginalString, delimiter);
    }

    return sumNumbersOfArray(splitNumbers);
}

function splitOnSingleDelimiter(numbers, delimiters) {
    return numbers.split(delimiters);
}

function splitByMultiDelimeters(numbers, delimiters) {
    var result = [numbers];
    if (typeof(delimiters) == 'string')
        delimiters = [delimiters];
    while (delimiters.length > 0) {
        for (var i = 0; i < result.length; i++) {
            var tempSplit = result[i].split(delimiters[0]);
            result = result.slice(0, i).concat(tempSplit).concat(result.slice(i + 1));
        }
        delimiters.shift();
    }
    return result;
}

function getCustomDelimiter(rawDelimiterString) {
    if (rawDelimiterString.indexOf('[') > -1 && rawDelimiterString.indexOf(']') > -1)
        return getMultiLengthCustomDelimiter(rawDelimiterString);

    return rawDelimiterString;
}

function getMultiLengthCustomDelimiter(rawDelimiterString) {
    var pos = rawDelimiterString.lastIndexOf(']');
    rawDelimiterString = rawDelimiterString.substring(0, pos).replace('[', '');

    if (rawDelimiterString.indexOf('][') > -1) {
        return rawDelimiterString.split('][');
    } else {
        return new Array(rawDelimiterString);
    }
}