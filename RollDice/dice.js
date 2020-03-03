// Init 2 arrays for displaying results:
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let countOut = [];

// For rolling one 
let rollOneDie = function(){
    let random1 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("diePic").src = "d" + random1 + ".jpg";
}

//For rolling two
let rollTwoDie = function(){
    let random1 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("diePic2").src = "d" + random1 + ".jpg";
    let random2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("diePic3").src = "d" + random2 + ".jpg";
}

//Roll two dice, add them together, track the results 2 ways.
let RollDice = function(n){
    while (n > 0){
        //Roll 2 die
        let random1 = Math.floor(Math.random() * 6 + 1); 
        let random2 = Math.floor(Math.random()*6 + 1);
    
        //Get the sum of those 2 die, and add 1 to the respective index of count:
        let addToCount = (random1 + random2) - 2;
        count[addToCount] = count[addToCount] + 1;

        //Get the sum of those 2 die and push that number to countOut:
        let addToCountOut = random1 + random2;
        countOut.push(addToCountOut);
        
        n--;
    }
}
RollDice(1000);

for ( let i = 0; i <= 10; i ++ ){
    //Init somewhere for the results to go:
    var newDiv = document.createElement("div");

    //Styleing for the bar graph
    newDiv.className = i;
    newDiv.style.height = 20 + "px";
    newDiv.style.width = (count[i] * 5) + "px";
    newDiv.style.margin = 5 + "px";
    newDiv.style.background = "lightblue";

    //text labels for the bar graph (I actually need 10 of these, each with their own label)
    //Will probably need a loop...
    let barText = document.createTextNode(" Rolled a " + (i+2));
    newDiv.appendChild(barText);

    //place it in the DOM
    document.getElementById("graph").appendChild(newDiv);
}
for(let i = 0; i <= countOut.length-1; i++ ){
    document.write("Roll " + i + ": " + countOut[i] + "<br>" );
}




