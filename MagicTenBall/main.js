//There are 19 answers
let answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


const ballContainer = document.getElementById("ballContainer");
const ball = document.getElementById("ball");
const answerContainer = document.getElementById("answerContainer");
const answer = document.getElementById("answerText");
const newBall = document.createElement('img');
newBall.id = "ball";
newBall.src = "10-ball.png";

function getAnswer(){
    rnd = Math.floor(Math.random() * 20);
    answer.innerHTML = answers[rnd];
}
function resetBall(){
    if( answer.innerHTML == "Reset"){
        answer.innerHTML = "";
        answerContainer.style.height = "0px";
        ball.style.height = "512px";
        
        answerContainer.classList.toggle("fadeInFast");
        answer.classList.toggle("fadeInFast");
        ball.classList.toggle("fadeOut");
        ball.classList.toggle("ballFadeIn");
        
        setTimeout( ()=> ball.classList.toggle("ballFadeIn"), 1000);
    }
}

function answerFadeIn(){
    answerContainer.style.height = "512px";
    answerContainer.classList.toggle("fadeInFast");
    answer.classList.toggle("fadeInSlow");
    
    setTimeout( ()=> {
        answer.classList.toggle("fadeInSlow");
        answer.classList.toggle("fadeOutAnswer");
        setTimeout(() => {
            answer.classList.toggle("fadeOutAnswer");
            answer.classList.toggle("fadeInFast");
        }, 1000);
    }, 3000);

    setTimeout( ()=> answer.innerHTML = "Reset", 4000);
}

function shake(){
    getAnswer();
 
    ball.classList.toggle("shake");
    setTimeout( ()=> ball.classList.toggle("shake"), 1000);
    setTimeout( ()=> ball.classList.toggle("fadeOut"), 1000);
    setTimeout(()=>{ ball.style.height = "0px";}, 2000);

    setTimeout( answerFadeIn, 2000);
}