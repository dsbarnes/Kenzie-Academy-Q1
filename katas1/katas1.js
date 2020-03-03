function oneThroughTwenty() {
    const numbers = [];
    for (let i = 1; i <= 20; i++) {
        numbers.push(i);
    };
    return numbers;
}


function evensToTwenty() {
    const numbers = []
    for (let i = 1; i <= 20; i++){
        if (i % 2 === 0){
            numbers.push(i)
        }
    }
    return numbers;
}

function oddsToTwenty() {
    const numbers = []
    for (let i = 1; i <= 20; i++){
        if (i % 2 === 1){
            numbers.push(i)
        }
    }
    return numbers;
}

function multiplesOfFive() {
    const numbers = []
    for (let i = 5; i <=100; i += 5){
        numbers.push(i);
    }
    return numbers;
}

function squareNumbers() {
    const numbers = []
    for (let i = 1; i <= Math.sqrt(100); i++){
        numbers.push(Math.pow(i, 2));
    }
    return numbers;
}

function countingBackwards() {
    const numbers = []
    for ( let i = 20; i >= 1; i--){
        numbers.push(i);
    }
    return numbers;
}

function evenNumbersBackwards() {
    const numbers = []
    for ( let i = 20; i >= 1; i--){
        if( i % 2 === 0){
            numbers.push(i);
        }
    }
    return numbers;
}

function oddNumbersBackwards() {
    const numbers = []
    for ( let i = 20; i >= 1; i--){
        if (i % 2 === 1){
            numbers.push(i);
        }
    }
    return numbers;
}

function multiplesOfFiveBackwards() {
    const numbers = []
    for ( let i = 100; i >= 5; i -= 5){
        numbers.push(i);
    }
    return numbers;
}

function squareNumbersBackwards() {
    const numbers = []
    for ( let i = 10; i >= 1; i--){
        numbers.push(Math.pow(i, 2));
    }
    // Your code goes below

    return numbers;
}