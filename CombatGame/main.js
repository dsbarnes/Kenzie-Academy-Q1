// I have no idea the best order to put this code...

class Character{
    constructor(name, physicalDamage, magicDamage, health, image){
    Object.assign(this, {name, physicalDamage, magicDamage, health, image})
        
    }
    physicalAttack(otherCharacter){
        
        const combatHistoryItem = document.createElement('div')
        const combatHistory = document.getElementById('combatHistory')
        
        const dTwentyCharacterRoll = rollRandomOneToTwenty()
        const dTwentyEnemyRoll = rollRandomOneToTwenty()
        const dSixRoll = rollRandomOneToSix()
        

        //Each time myCharacter attacks, the enemy does the same attack.
        if(dTwentyCharacterRoll <= 5) { 
            myCharacter.health -= dSixRoll * battleMath[dTwentyCharacterRoll] 
            combatHistoryItem.append(`Damage I took: ${dSixRoll * battleMath[dTwentyCharacterRoll]}`)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        else if(dTwentyCharacterRoll >= 15){ 
            otherCharacter.health -= myCharacter.physicalDamage * battleMath[dTwentyCharacterRoll] 
            combatHistoryItem.append(`My Damage: ${myCharacter.physicalDamage * battleMath[dTwentyCharacterRoll]} `)
            combatHistoryItem.append(`Enemy Health Remaining: ${otherCharacter.health} `)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        else { 
            otherCharacter.health -= myCharacter.physicalDamage + (dTwentyCharacterRoll / 2) 
            combatHistoryItem.append(`My Damage: ${myCharacter.physicalDamage + (dTwentyCharacterRoll / 2) } `)
            combatHistoryItem.append(`Enemy Health Remaining: ${otherCharacter.health}`)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        combatHistory.appendChild(combatHistoryItem)

        if(otherCharacter.health <= 0){alert('they dead')}

        if(dTwentyEnemyRoll <= 5){ 
            otherCharacter.health -= dSixRoll * battleMath[dTwentyEnemyRoll] 
        }
        else if(dTwentyEnemyRoll <= 5){ 
            myCharacter.health -= otherCharacter.physicalDamage * battleMath[dTwentyEnemyRoll] 
        }
        else { 
            myCharacter.health -= otherCharacter.physicalDamage + (dTwentyEnemyRoll / 2) 
        }

        if(myCharacter.health <= 0){alert('you dead')}
    }

    magicAttack(otherCharacter){
        // otherCharacter.health -= myCharacter.magicDamage
        const combatHistoryItem = document.createElement('div')
        const combatHistory = document.getElementById('combatHistory')

        const dTwentyCharacterRoll = rollRandomOneToTwenty()
        const dTwentyEnemyRoll = rollRandomOneToTwenty()
        const dSixRoll = rollRandomOneToSix()

        if(dTwentyCharacterRoll <= 5) { 
            myCharacter.health -= dSixRoll * battleMath[dTwentyCharacterRoll]
            combatHistoryItem.append(`Damage I took: ${dSixRoll * battleMath[dTwentyCharacterRoll]}`)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        else if(dTwentyCharacterRoll >= 15){ 
            otherCharacter.health -= myCharacter.magicDamage * battleMath[dTwentyCharacterRoll]
            combatHistoryItem.append(`My Damage: ${myCharacter.magicDamage * battleMath[dTwentyCharacterRoll]} `)
            combatHistoryItem.append(`Enemy Health Remaining: ${otherCharacter.health} `)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        else { 
            otherCharacter.health -= myCharacter.magicDamage + (dTwentyCharacterRoll / 2)
            combatHistoryItem.append(`My Damage: ${myCharacter.magicDamage + (dTwentyCharacterRoll / 2) } `)
            combatHistoryItem.append(`Enemy Health Remaining: ${otherCharacter.health}`)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        combatHistory.appendChild(combatHistoryItem)
        
        if(otherCharacter.health <= 0){alert('they dead')}

        if(dTwentyEnemyRoll <= 5){ 
            otherCharacter.health -= dSixRoll * battleMath[dTwentyEnemyRoll] 
        }
        else if(dTwentyEnemyRoll <= 5){ 
            myCharacter.health -= otherCharacter.magicDamage * battleMath[dTwentyEnemyRoll] 
        }
        else { 
            myCharacter.health -= otherCharacter.magicDamage + (dTwentyEnemyRoll / 2) 
        }

        if(myCharacter.health <= 0){alert('you dead')}
    }

    specialAttack(otherCharacter){
        // otherCharacter.health -= myCharacter.magicDamage + myCharacter.physicalDamage
        const combatHistoryItem = document.createElement('div')
        const combatHistory = document.getElementById('combatHistory')

        const dTwentyCharacterRoll = rollRandomOneToTwenty()
        const dTwentyEnemyRoll = rollRandomOneToTwenty()
        const dSixRoll = rollRandomOneToSix()

        if(dTwentyCharacterRoll <= 5) { 
            myCharacter.health -= dSixRoll * battleMath[dTwentyCharacterRoll] 
            combatHistoryItem.append(`Damage I took: ${dSixRoll * battleMath[dTwentyCharacterRoll]} `)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        else if(dTwentyCharacterRoll >= 15){ 
            otherCharacter.health -= (myCharacter.physicalDamage + myCharacter.magicDamage)* battleMath[dTwentyCharacterRoll] 
            combatHistoryItem.append(`My Damage: ${(myCharacter.magicDamage + myCharacter.physicalDamage) * battleMath[dTwentyCharacterRoll]} `)
            combatHistoryItem.append(`Enemy Health Remaining: ${otherCharacter.health} `)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        else { 
            otherCharacter.health -= (myCharacter.magicDamage + myCharacter.physicalDamage ) + (dTwentyCharacterRoll / 2) 
            combatHistoryItem.append(`My Damage: ${(myCharacter.magicDamage + myCharacter.physicalDamage ) + (dTwentyCharacterRoll / 2)} `)
            combatHistoryItem.append(`Enemy Health Remaining: ${otherCharacter.health}`)
            combatHistoryItem.append(`My health reamaining: ${myCharacter.health} `)
        }
        combatHistory.appendChild(combatHistoryItem)
        
        if(otherCharacter.health <= 0){alert('they dead')}

        if(dTwentyEnemyRoll <= 5){ otherCharacter.health -= dSixRoll * battleMath[dTwentyEnemyRoll] }
        else if(dTwentyEnemyRoll <= 5){ myCharacter.health -= (otherCharacter.physicalDamage + otherCharacter.magicDamage) * battleMath[dTwentyEnemyRoll] }
        else { myCharacter.health -= (otherCharacter.physicalDamage + otherCharacter.magicDamage) + (dTwentyEnemyRoll / 2) }

        if(myCharacter.health <= 0){alert('you dead')}
    }
}
//End the Class

//We need random numbers for the methods of our class
function rollRandomOneToTwenty(){
    let randomNumber = Math.floor( (Math.random() * 20) + 1 );
    return randomNumber
}
function rollRandomOneToSix(){
    let randomNumber = Math.floor( (Math.random() * 6) + 1 );
    return randomNumber
}

//We have some math that moves according to an function I don't care to define
//we store that math in an array, and use it in the Class methods
const battleMath = []
for( let i = 0; i < 21; i++) battleMath.push('')

//It's about the same number of lines to use a for loop...
//And I wasn't clear on the math to do this so I just hard coded it ...
battleMath[1] = 10
battleMath[2] = 5
battleMath[3] = 3
battleMath[4] = 2
battleMath[5] = 1

battleMath[15] = 1.25
battleMath[16] = 1.5
battleMath[17] = 1.75
battleMath[18] = 2
battleMath[19] = 3
battleMath[20] = 5

//Init the character and the enemy as empty characters
let myCharacter = new Character('', 0, 0, 0, '');
let myEnemy = new Character('', 0, 0, 0, '')

//Prevent re-init of character and/or enemy
let hasCharacterBeenCreated = false
let hasEnemyBeenCreated = false

//select all the buttons on the page, turn them into an array, add onclick
//once for character, once for enemy
//each attack button calls a different function, so we don't loop that
//also, when the page ran it was calling the function, so I just assigned onclick in the HTML
let characterButtons = document.getElementsByClassName('character')
let characterButtonsArray = Array(...characterButtons)
for( index = 0; index < characterButtonsArray.length; index++){
    characterButtonsArray[index].addEventListener('click', createCharacter)
}

let enemyButtons = document.getElementsByClassName('enemy')
let enemyButtonsArray = Array(...enemyButtons)
for( index = 0; index < enemyButtonsArray.length; index++){
    enemyButtonsArray[index].addEventListener('click', createEnemy)
}


//Creates a character based on the button you click
function createCharacter(){
    if(hasCharacterBeenCreated === false){
        
        myCharacter.name = this.id
        myCharacter.health = 1000
        myCharacter.image = `/${this.id}`
        document.getElementById('characterSection').style.backgroundImage = `url( /${this.id}.jpg )`
        
        if(this.id === 'Warrior'){
            myCharacter.physicalDamage = 150
            myCharacter.magicDamage = 50
        }
        else{ // 'Mage'
            myCharacter.physicalDamage = 50
            myCharacter.magicDamage = 150
        }
        
        hasCharacterBeenCreated = true
    }
    else{ // hasCharacterBeenCreated === true
        alert('Already selected a character: Refresh page to start again.')
    }
}

//Creates an enemy based on the button you click
function createEnemy(){
    if(hasEnemyBeenCreated === false){
        myEnemy.name = this.id
        if(this.id === "easyEnemy"){
            myEnemy.physicalDamage = 35
            myEnemy.magicDamage = 35
            myEnemy.health = 800
        }
        else{ //this.id === hardEnemy
            myEnemy.physicalDamage = 75
            myEnemy.magicDamage = 75
            myEnemy.health = 1250
        }
        myEnemy.image = `/${this.id}`
        document.getElementById('enemySection').style.backgroundImage = `url( /${this.id}.jpg )`

        hasEnemyBeenCreated = true
    }
    else{ //hasEnemyBeenCreated === true
        alert('Already selected an enemy: Refresh page to start again.')
    }
}






