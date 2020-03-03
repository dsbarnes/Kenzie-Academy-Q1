// Step first is to get some text to put into the box, consider that done.

wordCount = {};
letterCount = {};

function testFun(){
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z\s]+/g, "");
    
    let regExWords = /(\b\w+\b)/g;
    let regExLetters = /./g;
    
    let arrayWords = typedText.match(regExWords);
    let arrayLetters = typedText.match(regExLetters);
    
    //loop through those matches and count how many times we got each of them.
    for( let i in arrayWords){
        (arrayWords[i] in wordCount) ? wordCount[arrayWords[i]] += 1 : wordCount[arrayWords[i]] = 1;
    }
    for( let i in arrayLetters){
        (arrayLetters[i] in letterCount) ? letterCount[arrayLetters[i]] += 1 : letterCount[arrayLetters[i]] = 1;
    }
    
    document.getElementById("wordsDiv").innerHTML = JSON.stringify(wordCount);
    document.getElementById("lettersDiv").innerHTML = JSON.stringify(letterCount);

}
