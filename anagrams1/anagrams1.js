const button = document.getElementById("button");
const p = document.getElementById("p");

function alphabetize(a) {
    return String(a).toLowerCase().split("").sort().join("").trim();
}

button.onclick = function(){
    let wordInput = document.getElementById("wordInput").value;
    myInput = alphabetize(wordInput);
    
    let newArray = [];

    for (let i in words){
        if (alphabetize(words[i]) === myInput){
            newArray.push(words[i]);
        }
    }
    p.innerHTML = (newArray.join().replace(/,/g, ' '));

    
}

