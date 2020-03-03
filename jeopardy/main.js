//I am sure there is a better way to do this with a loop...
//This will get all the Jeopardy Clues for the categories noted in the comments
function getJeopardyData(){
    fetch('https://jservice.xyz/api/clues?category=18062')//"CLASSIC CARTOON CHARACTERS"
    .then( (res) => res.json() )
    .then( (data) => classicCartoonCharactersClues = new Object(data.clues))

    fetch('https://jservice.xyz/api/clues?category=188') //  "SCIENCE CLASS"
    .then( (res) => res.json() )
    .then( (data) => scienceClassClues = new Object(data.clues))

    fetch('https://jservice.xyz/api/clues?category=1519') // "COMPUTERS"
    .then( res => res.json() )
    .then( (data) => computerClues = new Object(data.clues))

    fetch('https://jservice.xyz/api/clues?category=12948') // "ENGINEERING"
    .then( res => res.json() )
    .then( (data) => engineeringClues = new Object(data.clues)) 

    fetch('https://jservice.xyz/api/clues?category=10850') // "MOTHER POLAND"
    .then( res => res.json() )
    .then( (data) => motherPolandClues = new Object(data.clues)) 

    fetch('https://jservice.xyz/api/clues?category=16648') // "SCIENCE HISTORY"
    .then( res => res.json() )
    .then( (data) => scienceHistoryClues = new Object(data.clues))
}
//Call the data when the page loads
//(Actually, i'm not really sure that's doing anything??)
window.onload = getJeopardyData()

//Create the Jeopardy grid, give IDs, Classes, and Datasets
function roundTwoValues(index){
    if (index < 5){ return (2 ** (index) * 100) }
    if (index === 5) return 2000
}
let main = document.querySelector('main')
for(let i = 0; i<6; i++){
    let row = document.createElement('div')
    
    row.classList.add('row')
    row.dataset.title = 'title'
    row.dataset.index = i
    
    main.appendChild(row)

    for(let j = 0; j<6; j++){
        let col = document.createElement('div')
    
        col.id = j
        col.classList.add('cell')
        col.dataset.x = i
        col.dataset.roundOneValue = j * 100
        col.dataset.roundTwoValue = roundTwoValues(j)
    
        row.appendChild(col)
    }
}
//Assigns a click to each cell
const allCellsArray = Array.from(document.querySelectorAll('.cell'))
allCellsArray.forEach( cell => cell.addEventListener('click', showClue))

//Assign a click to each button
let answerButton = document.getElementById('answerButton')
answerButton.addEventListener('click', answerQuestion)

let passButton = document.getElementById('passButton')
passButton.addEventListener('click', passQuestion)

//Assigns the value of each clue to the cells
//This is what you would change if you wanted to play with Double Jeopardy values
//One will also need to change the categories b/c not all of them have questions for DblJ values
allCellsArray.forEach( cell => cell.innerHTML = cell.dataset.roundOneValue)

//Get the top row where we will put the titles
const elementsForCategoryTitles = allCellsArray.filter(cell => cell.id == 0)

//Titles here will be assigned to the board
//Changing a title here will change it on the board
const categoryTitles = [ 
    "CLASSIC CARTOON CHARACTERS",
    "SCIENCE CLASS",
    "COMPUTERS",
    "ENGINEERING",
    "MOTHER POLAND",
    "SCIENCE HISTORY",
]
//Assigns the titles above to the cells in the top row
elementsForCategoryTitles
    .forEach(cell => cell.innerHTML = categoryTitles[cell.dataset.x])


//Init a single players score, 
//handle if the next clue is allowed to show, 
//store the correct answer and value of the clue the player clicked
//change the background color to red if the player needs to answer or skip, to green if the player can select a clue
let playerPoints = 0;
let showNextClue = 1
let lastCorrectAnswer = new String('')
let lastQuestionValue = new Number()
function changeBackgroundColor(){
    showNextClue === 1 ?
        allCellsArray.forEach(cell => cell.style.background = 'green') :
        allCellsArray.forEach(cell => cell.style.background = 'red')
}
changeBackgroundColor()


//This is the function that will be called when we click the answer button
function answerQuestion(){
    //Get the players answer
    const myAnswer = document.getElementById('answerInput').value
    //If that answer matches the correct answer, add points, if not, subtract points
    myAnswer == lastCorrectAnswer ? playerPoints += lastQuestionValue : playerPoints -= lastQuestionValue
    //Update the players point total
    document.getElementById('myPoints').innerHTML = playerPoints

    //Change the board back to green
    showNextClue = 1
    changeBackgroundColor()
    document.getElementById('lastCorrectAnswer').innerHTML = lastCorrectAnswer
}

//This is the function that will be called when we click the skip button
function passQuestion(){
    //Change the board back to green
    showNextClue = 1
    changeBackgroundColor()
    document.getElementById('lastCorrectAnswer').innerHTML = lastCorrectAnswer
}

//This is the function that is called when we click a cell on the board
function showClue(event){
    //If the cell is a title cell, do nothing
    if(event.path[0].dataset.roundOneValue == 0){ return void 0}
    else if(showNextClue === 1){
        //change the background color and prevent another clue from showing
        showNextClue = 0
        changeBackgroundColor()

        //Get the cell we click on, the category that cell is within, and the value of the cell
        const cell = event.path[0]
        const categoryClicked = event.path[0].parentElement.firstElementChild.innerHTML
        lastQuestionValue = event.path[0].dataset.roundOneValue
        
        //Creates a variable to store the exact clue in
        //in this case the clue is the first object in the '_CATEGORY_TITLE_'clues object with the value of the cell the player clicked on
        //if myClue had a value before (This is not the first clue of the game), it is reset here.
        let myClue = ''

        if(categoryClicked == "CLASSIC CARTOON CHARACTERS"){ myClue = classicCartoonCharactersClues.filter( clue => clue.value == lastQuestionValue)[0] }
        if(categoryClicked == "SCIENCE CLASS"){ myClue = scienceClassClues.filter( clue => clue.value == lastQuestionValue)[0] }
        if(categoryClicked == "COMPUTERS"){ myClue = computerClues.filter( clue => clue.value == lastQuestionValue)[0] }
        if(categoryClicked == "ENGINEERING"){ myClue = engineeringClues.filter( clue => clue.value == lastQuestionValue)[0] }
        if(categoryClicked ==  "MOTHER POLAND"){ myClue = motherPolandClues.filter( clue => clue.value == lastQuestionValue)[0] }
        if(categoryClicked == "SCIENCE HISTORY"){ myClue = scienceHistoryClues.filter( clue => clue.value == lastQuestionValue)[0] }

        //Display the question in the cell we clicked on
        cell.innerHTML = myClue.question
        //Store lastCorrectAnswer so we can compare it to the players answer in the answerQuestion() function
        lastCorrectAnswer = myClue.answer
    }
}





