const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


// **KENZIE EXAMPLE**
//
// for(i=1; i<=3; i++) {
// // Create a div, with class "bar", and set the width to 100px.
// let newElement = document.createElement("div");
// newElement.className = "bar";
// newElement.style.width = i*100 + "px";

// // Place a text label inside the new div.
// let newText = document.createTextNode("Bar #" + i);
// newElement.appendChild(newText);

// // Put the new div on the page inside the existing element "d1".
// let destination = document.getElementById("d1");
// destination.appendChild(newElement);
// }
// let hrTag = document.createElement("hr");
// document.getElementById("d1").appendChild(hrTag);


// THE ASSIGNMENT BEGINS HERE

//Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)
let OneToTwentyP = document.createElement("p");
for (i = 1; i <= 20; i++){
    let OneToTwentyText = document.createTextNode(i + " ");
    OneToTwentyP.appendChild(OneToTwentyText);
    document.getElementById("OneToTwenty").appendChild(OneToTwentyP);
}

//Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
let OneToTwentyEvenP = document.createElement("p");
for (i = 1; i <= 20; i++){
    if( i % 2 === 0){
    let OneToTwentyEvenText = document.createTextNode(i + " ");
    OneToTwentyEvenP.appendChild(OneToTwentyEvenText);
    document.getElementById("OneToTwentyEven").appendChild(OneToTwentyEvenP);
    }
}

//Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
let OneToTwentyOddP = document.createElement("p");
for (i = 1; i <= 20; i++){
    if( i % 2 === 1){
    let OneToTwentyOddText = document.createTextNode(i + " ");
    OneToTwentyOddP.appendChild(OneToTwentyOddText);
    document.getElementById("OneToTwentyOdd").appendChild(OneToTwentyOddP);
    }
}

//Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
let OneToTwentyMultFiveP = document.createElement("p");
for (i = 5; i <= 100; i = i+5){
    let OneToTwentyMultFiveText = document.createTextNode(i + " ");
    OneToTwentyMultFiveP.appendChild(OneToTwentyMultFiveText);
    document.getElementById("MultFive").appendChild(OneToTwentyMultFiveP);
}

//Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
let SquareNumbersP = document.createElement("p");
for (i = 1; i <= 10; i++){
    let SquareNumbersText = document.createTextNode(Math.pow(i, 2) + " ");
    SquareNumbersP.appendChild(SquareNumbersText);
    document.getElementById("SquareNumbers").appendChild(SquareNumbersP);
}

//Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
let TwentyToOneP = document.createElement("p");
for (i = 20; i >= 1; i--){
    let TwentyToOneText = document.createTextNode(i + " ");
    TwentyToOneP.appendChild(TwentyToOneText);
    document.getElementById("TwentyToOne").appendChild(TwentyToOneP);
}
//Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
let TwentyToOneEvenP = document.createElement("p");
for (i = 20; i >= 1; i--){
    if( i % 2 === 0){
    let TwentyToOneEvenText = document.createTextNode(i + " ");
    TwentyToOneEvenP.appendChild(TwentyToOneEvenText);
    document.getElementById("TwentyToOneEven").appendChild(TwentyToOneEvenP);
    }
}
//Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
let TwentyToOneOddP = document.createElement("p");
for (i = 20; i >= 1; i--){
    if( i % 2 === 1){
    let TwentyToOneOddText = document.createTextNode(i + " ");
    TwentyToOneOddP.appendChild(TwentyToOneOddText);
    document.getElementById("TwentyToOneOdd").appendChild(TwentyToOneOddP);
    }
}
//Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
let HundredToFiveP = document.createElement("p");
for (i = 100; i >= 5; i = i-5){
    let HundredToFiveText = document.createTextNode(i + " ");
    HundredToFiveP.appendChild(HundredToFiveText);
    document.getElementById("HundredToFive").appendChild(HundredToFiveP);
}
//Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
let SquareNumbersRP = document.createElement("p");
for (i = 10; i >= 1; i--){
    let SquareNumbersRText = document.createTextNode(Math.pow(i, 2) + " ");
    SquareNumbersRP.appendChild(SquareNumbersRText);
    document.getElementById("SquareNumbersR").appendChild(SquareNumbersRP);
}

//Here begins work with the provided array


//Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
let DisplayAllP = document.createElement("p");
for (i in sampleArray){
    let DisplayAllText = document.createTextNode(sampleArray[i] + " ");
    DisplayAllP.appendChild(DisplayAllText);
    document.getElementById("DisplayAll").appendChild(DisplayAllP);
}

//Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
let DisplayAllEvenP = document.createElement("p");
for (i in sampleArray){
    if( sampleArray[i] % 2 === 0){
    let DisplayAllEvenText = document.createTextNode(sampleArray[i] + " ");
    DisplayAllEvenP.appendChild(DisplayAllEvenText);
    document.getElementById("DisplayAllEven").appendChild(DisplayAllEvenP);
    }
}

//Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
let DisplayAllOddP = document.createElement("p");
for (i in sampleArray){
    if( sampleArray[i] % 2 === 1){
    let DisplayAllOddText = document.createTextNode(sampleArray[i] + ",");
    DisplayAllOddP.appendChild(DisplayAllOddText);
    document.getElementById("DisplayAllOdd").appendChild(DisplayAllOddP);
    }
}

//Display the square of each element in sampleArray. (219961, 570025, …, 222784)
let DisplayAllSquareP = document.createElement("p");
for (i in sampleArray){
    let DisplayAllSquareText = document.createTextNode(Math.pow(sampleArray[i], 2) + " ");
    DisplayAllSquareP.appendChild(DisplayAllSquareText);
    document.getElementById("DisplayAllSquare").appendChild(DisplayAllSquareP);
}

//Display the sum of all the numbers from 1 to 20.
let SumToTwentyP = document.createElement("p");
const ArrayToTwenty = [];

for (i = 1; i <= 20; i++){
    ArrayToTwenty.push(i);
}

const sumArrayToTwenty = ArrayToTwenty.reduce((a, b) => a + b);
let SumToTwentyText = document.createTextNode(sumArrayToTwenty);
SumToTwentyP.appendChild(SumToTwentyText);
document.getElementById("SumToTwenty").appendChild(SumToTwentyP);


//Display the sum of all the elements in sampleArray.
let SumSampleArrayP = document.createElement("p");
let SumSampleArrayN = document.createTextNode(sampleArray.reduce((a, b) => a + b));
SumSampleArrayP.appendChild(SumSampleArrayN);
document.getElementById("SumSampleArray").appendChild(SumSampleArrayP);

//Display the smallest element in sampleArray.
//document.write(sampleArray.sort( (a, b) => a - b ));

let SmallArrayP = document.createElement("p");
let SmallArrayOrder = sampleArray.sort( (a, b) => a - b );
let SmallArrayText = document.createTextNode( SmallArrayOrder[0]);
SmallArrayP.appendChild(SmallArrayText);
document.getElementById("SmallArray").appendChild(SmallArrayP);

//Display the largest element in sampleArray.
let BigArrayP = document.createElement("p");
let BigArrayOrder = sampleArray.sort( (a, b) => a - b );
let BigArrayText = document.createTextNode( BigArrayOrder[BigArrayOrder.length - 1]);
BigArrayP.appendChild(BigArrayText);
document.getElementById("BigArray").appendChild(BigArrayP);


// This is where the rectangles begin.

//Display 20 solid gray rectangles, each 20px high and 100px wide.
for(i=1; i<=20; i++) {
    let newElement = document.createElement("div");
    newElement.style.width = 100 + "px";
    newElement.style.height = 20 + "px";
    newElement.style.background = "gray";
    newElement.style.margin = 10 + "px";
    let destination = document.getElementById("d1");
    destination.appendChild(newElement);
}


//Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
for(i=1; i<=20; i++) {
    let newElement = document.createElement("div");
    newElement.style.width = i * ((200-105)/20) + "px";
    newElement.style.height = 20 + "px";
    newElement.style.background = "gray";
    newElement.style.margin = 10 + "px";
    let destination = document.getElementById("d2");
    destination.appendChild(newElement);
}
//Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
for(i=1; i<=20; i++) {
    let newElement = document.createElement("div");
    newElement.style.width = i + "px";
    newElement.style.height = 20 + "px";
    newElement.style.background = "gray";
    newElement.style.margin = 10 + "px";
    let destination = document.getElementById("d3");
    destination.appendChild(newElement);
}
//As in #21, but alternate colors so that every other rectangle is red.
for(i=1; i<=20; i++) {
    let newElement = document.createElement("div");
    newElement.style.width = i + "px";
    newElement.style.height = 20 + "px";
    newElement.style.margin = 10 + "px";
    (i % 2 === 0) ? newElement.style.background = "red" : newElement.style.background = "gray";
    let destination = document.getElementById("d4");
    destination.appendChild(newElement);
}

//As in #21, but color the rectangles with even widths red.
for(i=1; i<=20; i++) {
    let newElement = document.createElement("div");
    newElement.style.width = i + "px";
    newElement.style.height = 20 + "px";
    newElement.style.margin = 10 + "px";
    (i % 2 === 0) ? newElement.style.background = "red" : newElement.style.background = "gray";
    let destination = document.getElementById("d5");
    destination.appendChild(newElement);
}