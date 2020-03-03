const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W X",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];
let betterMap = [];
betterMap = map.map( (e) => e.replace(/\s/g, 'F').split('')  );
let board = document.querySelector('main');
let player = {x: 0, y: 0};

for( let i = 0; i < betterMap.length; i++){
    
    let rowElement = document.createElement("div");
    rowElement.classList.add('row');
    rowElement.dataset.x = i;
    board.appendChild(rowElement);

    for(let j = 0; j < betterMap[i].length; j++){
        
        let cellType = betterMap[i][j];
        let cellElement = document.createElement("div");
        
        cellElement.classList.add("cell", cellType);
        cellElement.dataset.x = i;
        cellElement.dataset.y = j;
        cellElement.dataset.type = betterMap[i][j];
        cellElement.id = `x${i},y${j}`
        
        rowElement.appendChild(cellElement);

        if (cellType === 'S'){
            player.x = i;
            player.y = j;
        }
    }

}

document.addEventListener('keydown', moveSwitch);

function moveSwitch(keyName){
    console.log(keyName.key);
    let cLoc = document.getElementById(`x${player.x},y${player.y}`)
    let nLoc = ''
    if(keyName.key === "ArrowRight") nLoc = document.getElementById(`x${player.x},y${player.y + 1}`)
    if(keyName.key === "ArrowLeft") nLoc = document.getElementById(`x${player.x},y${player.y - 1}`)
    if(keyName.key === "ArrowUp") nLoc = document.getElementById(`x${player.x - 1},y${player.y}`)
    if(keyName.key === "ArrowDown") nLoc = document.getElementById(`x${player.x + 1},y${player.y}`)
 

    switch(keyName.key){
        
        case arrow = "ArrowRight":
            if(nLoc.dataset.type === "F"){
                nLoc.dataset.type = "S"
                cLoc.dataset.type = "F"
                player.y += 1;
            }
            if(nLoc.dataset.type === "X"){
                document.write("You found your way out of the maze!")
            }
            break;

        case arrow = "ArrowLeft":
            if(nLoc.dataset.type === "F"){
                nLoc.dataset.type = "S"
                cLoc.dataset.type = "F"
                player.y -= 1
            }
            break;

        case arrow = "ArrowUp":
            if(nLoc.dataset.type === "F"){
                nLoc.dataset.type = "S"
                cLoc.dataset.type = "F"
                player.x -= 1
            }
            break;
        case arrow = "ArrowDown":
            if(nLoc.dataset.type === "F"){
                nLoc.dataset.type = "S"
                cLoc.dataset.type = "F"
                player.x += 1
            }
            break;
    }
}




