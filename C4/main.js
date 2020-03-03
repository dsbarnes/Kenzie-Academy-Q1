// Init the board as an array and populate it:
board = [];
for( let i = 0; i <= 6; i++){
    board.push([]);
    for( j = 0; j <= 5; j++){
        board[i].push('');
    }
}

//Init a player
let player = 1;

//Init win counter (when you lay a checker you have 1 in a row)
let winCounter = 1;
// let x = 0; //I will need this to clean the code and make pretty

let checkerCounter = 0;

//Add an onclick to every td element:
tRows = document.querySelectorAll('td');
for(let i = 0; i < tRows.length; i++){
    tRows[i].addEventListener('click', clickHandler);
}

function clickHandler(){ //When you click on a td element all of this happens
    // Init (x, y) pair
    x = parseInt(this.className[3]);
    let y = this.parentElement.className[3];
    let last = 0;

    function checkerCheck(){
        if( !board[x][last] ){ //if the last cell in the row is empty
            board[x][last] = player; //put the players checker in it
                                     //else, add 1 to last and check again (defined way below)

            checkerCounter += 1;
            
            //Colors the board
            colorMe = document.getElementsByClassName('row' + last)[0].children[x];
            (player === 1) ?
            colorMe.style.backgroundColor = 'red' :
            colorMe.style.backgroundColor = 'black' ;
            

            //we're going to be moving around so we need this:
            let fromChecker = [x, last];
            let nextChecker = [];

            //here is each way of winning
            //this needs to become a single function w/ plenty of perams
            function addLeft(a){ //think of a[0] as x, and a[1] as y
                if(a[0] - 1 >= 0 
                    && board[ a[0] - 1 ][ a[1] ] === board[x][last] ) { //checker to my left has the same value, if it does,
                    nextChecker = [ a[0] - 1, a[1] ]; //set the checker to the left as the next one to check to the left of
                    winCounter += 1; // add one to our win counter (this gets reset in winCheck() )
                    addLeft(nextChecker); //and check again, starting at the checker that matched.
                    console.log('addLeft: ' + winCounter);
                }
            } 
            // all the other addBlah functions do the same thing as the first one,
            //they just look in different directions.
        
            function addRight(a){
                if(a[0] + 1 <= board.length - 1 
                    && board[ a[0] + 1 ][ a[1] ] === board[x][last] ) {

                    nextChecker = [ a[0] + 1, a[1] ];
                    winCounter += 1;
                    addRight(nextChecker);
                    console.log('addRight: ' + winCounter);
                }
            }
            function addDown(a){
                if( a[1] - 1 >= 0 
                    && board[ a[0] ][ a[1] - 1 ] === board[x][last] ) {

                    nextChecker = [ a[0], a[1] - 1 ];
                    winCounter += 1;
                    addDown(nextChecker);
                    console.log('addDown: ' + winCounter);
                }
            }

            function addDiagDownR(a){
                if(a[0] + 1 <= board.length - 1
                    && a[1] - 1 >= 0
                    && board[ a[0] + 1 ][ a[1] - 1 ] === board[x][last] ) {

                    nextChecker = [ a[0] + 1, a[1] - 1 ];
                    winCounter += 1;
                    addDiagDownR(nextChecker);
                    console.log('addDiagDownR: ' + winCounter);
                }
            }
            function addDiagDownL(a){
                if(a[0] - 1 >= 0
                    && a[1] - 1 >= 0
                    && board[ a[0] - 1 ][ a[1] - 1 ] === board[x][last] ) {

                    nextChecker = [ a[0] - 1, a[1] - 1 ];
                    winCounter += 1;
                    addDiagDownL(nextChecker);
                    console.log('addDiagDownL: ' + winCounter);
                }
            }
            function addDiagUpR(a){
                if(a[0] + 1 <= board.length - 1
                    && a[1] + 1 <= board[ a[0] ].length - 1
                    && board[ a[0] + 1 ][ a[1] + 1 ] === board[x][last] ) {

                    nextChecker = [ a[0] + 1, a[1] + 1 ];
                    winCounter += 1;
                    addDiagUpR(nextChecker);
                    console.log('addDiagUpR: ' + winCounter);
                }
            }
            function addDiagUpL(a){
                if(a[0] - 1 >= 0
                    && a[1] + 1 <= board[ a[0] ].length - 1
                    && board[ a[0] - 1 ][ a[1] + 1 ] === board[x][last] ) {

                    nextChecker = [ a[0] - 1, a[1] + 1 ];
                    winCounter += 1;
                    addDiagUpL(nextChecker);
                    console.log('addDiagUpL: ' + winCounter);
                }
            }

            //Now we need to call all of those functions:
            function winCheck(){
                
                addLeft(fromChecker); // we add to the left
                if(winCounter != 4) addRight(fromChecker); //if that doesn't get us to four, add to the right
                //the number of matches from the left are retained in winCounter, b/c we don't reset it to 1
                if(winCounter != 4) winCounter = 1; //if the pieces left and right didn't add to 4,
                //now set win counter back to 1.
                
                //the rest of these blocks do the same thing in differnt ditections.
                
                addDown(fromChecker);
                if(winCounter != 4)  winCounter = 1;
                //we don't check up b/c you cannt place a checker that hase one on top of it already...
                
                addDiagDownR(fromChecker);
                if(winCounter != 4) addDiagUpL(fromChecker);
                if(winCounter != 4) winCounter = 1;

                addDiagUpR(fromChecker);
                if(winCounter != 4) addDiagDownL(fromChecker); 
                if(winCounter != 4) winCounter = 1;

                if(winCounter >= 4) { //we found 4 in a row
                    (player === 1) ? color = 'red' : color = 'black';
                    alert(`Player: ${player}: ${color} wins!`); //alert for a win
                    //and then reset the board.
                }
                if(checkerCounter === 42) alert('tie game');
                
            }

            //Now we call the function that calls all of our functions.
            winCheck();

            //changes players
            if(player === 1) player += 1; 
            else player -= 1;

        }
        else{ //if the last row is not empty, 
            last++; //move to the next one, 
            checkerCheck(); //and do that if bit again.
        } 
    }
    checkerCheck();
    // console.log(board);
    //damn that was rough.
}