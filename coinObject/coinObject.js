const body = document.querySelector("body");
let containerDiv = document.createElement("div");
containerDiv.id = "container";
let wordsDiv = document.createElement("div");
wordsDiv.id = "words";
let imagesDiv = document.createElement("div");
imagesDiv.id = "images";
body.appendChild(containerDiv);
let container = document.querySelector("#container")
container.appendChild(wordsDiv);
container.appendChild(imagesDiv);

const coin = {
    
    state: 0,
    
    flip: function() {
        this.state = Math.floor(Math.random() * 2);
    },
    
    toString: function() {

        let str = '';
        (this.state === 1) ? str = "Heads" : str = "Tails";
        return str;
    },
    
    toHTML: function() {

        const image = document.createElement('img');
        (this.state === 1) ? image.src = "Heads.png" : image.src = "Tails.png";
        return image.src;
    }
};

function display20Flips() {

    let display = [];
    
    for(let flip = 0; flip < 20; flip++){
        coin.flip();
        display.push(coin.toString());
    }
    
    for(let i = 0; i < 20; i++){
        span = document.createElement("span");
        span.innerHTML = display[i] + ' ';
        document.getElementById("words").appendChild(span);
    }
    
    return "Displayed 20 flips as text";
}

function display20Images() {

    let display = [];
    
    for(let flip = 0; flip < 20; flip++){
        coin.flip();
        display.push(coin.toHTML());
    }
    
    for(let i = 0; i < 20; i++){
        let image = document.createElement('img');
        image.src = display[i];
        document.getElementById("images").appendChild(image);
    }
    
    return "Displayed 20 flips as images"
}

display20Flips()
display20Images()