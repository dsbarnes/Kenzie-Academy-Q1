let stringToReverse = "Hello";
let sentenceToReverse = "This is a sentence to reverse.";
let valueArray = [12, 33, 4, 63, 13, 1];
let distinctValueArray = [1, 1, 2, 2, 3, 3, 4, 5, 6];

function reverseString(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let reversedString = reverseString.join("");
    
    return reversedString;
}

//@Test

function testReverseString1() {
    let result = reverseString("Hello");
    console.assert(result === "olleH");
}


function testReverseString2() {
    let result = reverseString("Howdy");
    console.assert(result === "ydwoH");
}

console.log(reverseString(stringToReverse));

function reverseSentence(str) {
    let splitSentence = str.split(" ");
    let reverseSentence = splitSentence.reverse();
    let reversedSentence = reverseSentence.join(" ");

    return reversedSentence;

}

function testReverseSentence1() {
    let result = reverseString("This is a sentence.");
    console.assert(result === "sentence. a is This");
}

function testReverseSentence2() {
    let result = reverseString("This is another sentence to reverse.");
    console.assert(result === "reverse. to sentence another is This");
}

console.log(reverseSentence(sentenceToReverse));

function minimumValue(arr) {
    let minValue = Math.min.apply(null, arr); 
    return minValue;
}

function testMinimumValue1() {
    let result = minimumValue([17, 12, 14, 11, 15, 10])
    console.assert(result === 10)
}

function testMinimumValue2() {
    let result = minimumValue([21, 12, 24, 11, 45, 100])
    console.assert(result === 12)
}



console.log(minimumValue(valueArray));

function maximumValue(arr) {
    let maxValue = Math.max.apply(null, arr);
    return maxValue;
}

console.log(maximumValue(valueArray));

function testMaximumValue1() {
    let result = maximumValue([21, 12, 24, 11, 45, 100])
    console.assert(result === 100)
}

function testMaximumValue2() {
    let result = maximumValue([210, 12, 240, 11, 45, 100])
    console.assert(result === 240)
}

function calculateRemainder(numer, denom) {
    let remain = numer % denom;
    return remain;
}

console.log(calculateRemainder(18287, 1828374));

function testCalculateRemainder1() {
    let result = calculateRemainder(210, 12)
    console.assert(result === 6)
}

function testCalculateRemainder2() {
    let result = calculateRemainder(240, 12)
    console.assert(result === 0)
}

function distinctValues(arr) {
    let values = [...new Set(arr)];
    return values;
}

function testDistinctValues1() {
    let result = distinctValues([12, 13, 12, 13])
    console.assert(result == [12, 13])
}

function testDistinctValues2() {
    let result = distinctValues([22, 32, 23, 32])
    console.assert(result == [22, 32])
}

console.log(distinctValues(distinctValueArray));

function countValues(arr) {
    let occurences = arr.reduce(function(obj, item) {
        obj[item] = (obj[item] || 0) +1;
        return obj;
        
    }, {});
    return occurences;
}

function testCountValues1() {
    let result = countValues([22, 32, 23, 32])
    console.assert(result == [22, 32])
}

function testCountValues2() {
    let result = countValues([22, 32, 23, 32])
    console.assert(result == [22, 32])
}


console.log(countValues(distinctValueArray));

function evaluateExpression(exp, obj) {


}

function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === -3)
}

function testEvaluateExpression2() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === -3)
}


