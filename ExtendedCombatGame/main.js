class Character{
    constructor(name, baseHealth, baseDamage, img){
        Object.assign(this, {name, baseHealth, baseDamage, img})
    }
}

class nonPlayerCharacter extends Character{
    constructor(name, baseHealth, baseDamage, baseStrongDamage, baseArmor, img){   
        super(name, baseHealth, baseDamage, img)
        Object.assign(this, {baseStrongDamage, baseArmor})
    }
    basicAttack(thisCharacter, defender){
        const rollTwenty = Math.floor(Math.random() * 20) + 1
        if(rollTwenty <= 5){
            const rollSix = Math.floor(Math.random() * 6) + 1
            thisCharacter.baseHealth -= (rollSix * damageMath[rollTwenty])
            appendCombatActiaon(false, false, 
                rollSix * damageMath[rollTwenty], 
                defender.baseHealth)
            if (thisCharacter.baseHealth <= 0) alert('They Dead!') 
        }
        else if(rollTwenty >= 15){
            defender.baseHealth -= (thisCharacter.baseDamage * damageMath[rollTwenty]) - defender.baseArmor
            defender.baseArmor -= 2
            appendCombatActiaon(false, true, 
                (thisCharacter.baseDamage * damageMath[rollTwenty]) - (defender.baseArmor + 2),
                defender.baseHealth)
            if (defender.baseHealth <= 0) alert('You Dead!') 
        }
        else {
            defender.baseHealth -= ( thisCharacter.baseDamage + (rollTwenty / 2) ) - defender.baseArmor
            defender.baseArmor -= 1
            appendCombatActiaon(false, true, 
                ( thisCharacter.baseDamage + (rollTwenty / 2) ) - (defender.baseArmor + 1),
                defender.baseHealth)
            if (defender.baseHealth <= 0) alert('You Dead!')
        }
    }
    strongAttack(thisCharacter, defender){
        const rollTwenty = Math.floor(Math.random() * 20) + 1
        if(rollTwenty <= 5){
            const rollSix = Math.floor(Math.random() * 6) + 1
            thisCharacter.baseHealth -= (rollSix * damageMath[rollTwenty]) * 2
            appendCombatActiaon(false, false, 
                rollSix * damageMath[rollTwenty] * 2, 
                defender.baseHealth)
            if (thisCharacter.baseHealth <= 0) alert('They Dead!') 
        }
        else if(rollTwenty >= 15){
            defender.baseHealth -= (thisCharacter.baseStrongDamage * damageMath[rollTwenty]) - defender.baseArmor
            defender.baseArmor -= 2
            appendCombatActiaon(false, true, 
                (thisCharacter.baseSTrongDamage * damageMath[rollTwenty]) - (defender.baseArmor + 2),
                defender.baseHealth)
            if (defender.baseHealth <= 0) alert('You Dead!') 
        }
        else {
            defender.baseHealth -= ( thisCharacter.baseStrongDamage + (rollTwenty / 2) ) - defender.baseArmor
            defender.baseArmor -= 1
            appendCombatActiaon(false, true, 
                ( thisCharacter.baseStrongDamage + (rollTwenty / 2) ) - (defender.baseArmor + 1),
                defender.baseHealth)
            if (defender.baseHealth <= 0) alert('You Dead!')
        }
    }
}

class PlayerCharacter extends nonPlayerCharacter {
    constructor(name, baseHealth, baseDamage, baseStrongDamage, baseArmor, stamina, img){
        super(name, baseHealth, baseDamage, baseStrongDamage, baseArmor, img)
        Object.assign(this, {stamina})
    }
    basicAttack(thisCharacter, defender){
        if(isPlayerCreated === true && isEnemyCreated === true){
            const rollTwenty = Math.floor(Math.random() * 20) + 1
            if(thisCharacter.stamina >= thisCharacter.baseDamage ){
                
                if(rollTwenty <= 5){ //miss and take dmg based on d6 roll
                    const rollSix = Math.floor(Math.random() * 6) + 1
                    thisCharacter.baseHealth -= (rollSix * damageMath[rollTwenty])
                    thisCharacter.stamina -= thisCharacter.baseDamage
                    appendCombatActiaon(true, false, 
                        rollSix * damageMath[rollTwenty], 
                        defender.baseHealth, 
                        thisCharacter.stamina)
                    if (thisCharacter.baseHealth <= 0) alert('You Dead!') 
                    else defender.basicAttack(myEnemy, myCharacter)
                }
                else if(rollTwenty >= 15){ //do bonus dmg
                    defender.baseHealth -= (thisCharacter.baseDamage * damageMath[rollTwenty]) - defender.baseArmor
                    defender.baseArmor -= 2;
                    thisCharacter.stamina -= thisCharacter.baseDamage
                    appendCombatActiaon(true, true,
                        (thisCharacter.baseDamage * damageMath[rollTwenty]) - (defender.baseArmor + 2), 
                        defender.baseHealth, 
                        thisCharacter.stamina)
                    if (defender.baseHealth <= 0) alert('They Dead!')
                    else defender.basicAttack(myEnemy, myCharacter)  
                }
                else{ //normal dmg
                    defender.baseHealth -= (thisCharacter.baseDamage + (rollTwenty / 2)) - defender.baseArmor
                    defender.baseArmor -= 1
                    thisCharacter.stamina -= thisCharacter.baseDamage
                    appendCombatActiaon(true, true, 
                        (thisCharacter.baseDamage + (rollTwenty / 2)) - (defender.baseArmor + 1),
                        defender.baseHealth, 
                        thisCharacter.stamina)
                    if (defender.baseHealth <= 0) alert('They Dead!')
                    else defender.basicAttack(myEnemy, myCharacter)
                }
            }
            thisCharacter.stamina += thisCharacter.stamina * 0.05
        }else{
            alert('Create a character and enemy before attacking')
        }
    }
    strongAttack(thisCharacter, defender){
        if(isPlayerCreated === true && isEnemyCreated === true){
            const rollTwenty = Math.floor(Math.random() * 20) + 1
            if(thisCharacter.stamina >= thisCharacter.baseStrongDamage ){
                
                if(rollTwenty <= 5){ //miss and take dmg based on d6 roll
                    const rollSix = Math.floor(Math.random() * 6) + 1
                    thisCharacter.baseHealth -= (rollSix * damageMath[rollTwenty] * 2)
                    thisCharacter.stamina -= thisCharacter.baseStrongDamage
                    appendCombatActiaon(true, false, 
                        rollSix * damageMath[rollTwenty] * 2, 
                        defender.baseHealth, 
                        thisCharacter.stamina)
                    if (thisCharacter.baseHealth <= 0) alert('You Dead!') 
                    else defender.basicAttack(myEnemy, myCharacter)
                }
                else if(rollTwenty >= 15){ //do bonus dmg
                    defender.baseHealth -= (thisCharacter.baseStrongDamage * damageMath[rollTwenty]) - defender.baseArmor
                    defender.baseArmor -= 2;
                    thisCharacter.stamina -= thisCharacter.baseStrongDamage
                    appendCombatActiaon(true, true,
                        (thisCharacter.baseStrongDamage * damageMath[rollTwenty]) - (defender.baseArmor + 2), 
                        defender.baseHealth, 
                        thisCharacter.stamina)
                    if (defender.baseHealth <= 0) alert('They Dead!')
                    else defender.basicAttack(myEnemy, myCharacter)  
                }
                else{ //normal dmg
                    defender.baseHealth -= (thisCharacter.baseStrongDamage + (rollTwenty / 2)) - defender.baseArmor
                    defender.baseArmor -= 1
                    thisCharacter.stamina -= thisCharacter.baseStrongDamage
                    appendCombatActiaon(true, true, 
                        (thisCharacter.baseStrongDamage + (rollTwenty / 2)) - (defender.baseArmor + 1),
                        defender.baseHealth, 
                        thisCharacter.stamina)
                    if (defender.baseHealth <= 0) alert('They Dead!')
                    else defender.basicAttack(myEnemy, myCharacter)
                }
            }
            thisCharacter.stamina += thisCharacter.stamina * 0.05
        }else{
            alert('Create an character and an enemy before attacking.')
        }
    }
    summon(){
        alert('Whado I look lik? an over achiever? get back to clicking attacks...')
    }
    heal(){
        if(isPlayerCreated === true && isEnemyCreated === true){
            const rollTwenty = Math.floor(Math.random() * 20) + 1
            myCharacter.baseHealth += myEnemy.baseDamage * damageMath[rollTwenty]
            myCharacter.stamina = 100
            const combatHistory = document.querySelector('#combatHitsoryContainer')
            const p = document.createElement('p')
            p.append(`You heal for ${myEnemy.baseDamage * damageMath[rollTwenty]} | Stamina reset to 100`)
            combatHistory.appendChild(p)
            myEnemy.basicAttack(myEnemy, myCharacter)
        }else{
            alert('Create a character and an enemy before healing')
        }
    }
}

let isPlayerCreated = false
let isEnemyCreated = false
let isSummonCreated = false

let myCharacter = new PlayerCharacter('', 0, 0, 0, 0, 0, 0, 0)
let myEnemy = new nonPlayerCharacter('', 0, 0, 0, 0)

function createPlayerCharacter(){
    if(isPlayerCreated === false){
        if(this.id === 'Warrior'){ 
            myCharacter.name = `${this.id}` 
            myCharacter.img = `/${this.id}`
            myCharacter.baseHealth = 200
            myCharacter.stamina = 100
            myCharacter.baseDamage = 18
            myCharacter.baseStrongDamage = 22
            myCharacter.baseArmor = 9
            isPlayerCreated = true
        }
        if(this.id === 'Mage'){ 
            myCharacter.name = `${this.id}` 
            myCharacter.img = `/${this.id}`
            myCharacter.baseHealth = 200
            myCharacter.stamina = 125
            myCharacter.baseDamage = 7
            myCharacter.baseStrongDamage = 40
            myCharacter.baseArmor = 6
            isPlayerCreated = true
        }
        if(this.id === 'Rogue'){ 
            myCharacter.name = `${this.id}`
            myCharacter.img = `/${this.id}`
            myCharacter.baseHealth = 200
            myCharacter.stamina = 125
            myCharacter.baseDamage = 16
            myCharacter.baseStrongDamage = 29
            myCharacter.baseArmor = 8
            isPlayerCreated = true
        }
        document.querySelector('#characterBoard p').innerHTML = `Selected Character: ${this.id}`
    }else{
        alert('Player Already Selected -- Refresh to Restart')
    }
}

function createNPC(){
    if(isEnemyCreated === false){

        if (this.id === 'easy') {
            myEnemy.name = `${this.id}`
            myEnemy.img = `/${this.id}`
            myEnemy.baseHealth = 200
            myEnemy.baseDamage = 15
            myEnemy.baseStrongDamage = 20
            myEnemy.baseArmor = 5
            isEnemyCreated = true
        } 
        else{
            myEnemy.name = `${this.id}`
            myEnemy.img = `/${this.id}`
            myEnemy.baseHealth = 260
            myEnemy.baseDamage = 18
            myEnemy.baseStrongDamage = 29
            myEnemy.baseArmor = 8
            isEnemyCreated = true
        }
        document.querySelector('#enemyBoard p').innerHTML = `Selected a(n) ${this.id} Enemy`
    }else{
        alert('Enemy Already Selected -- Refresh to Restart')
    }
}

function appendCombatActiaon(isMe, hit, damage, health, stamina=0){
    const combatHistory = document.querySelector('#combatHitsoryContainer')
    const p = document.createElement('p')
    if(isMe === true){
        if(hit === true) p.append(`You did ${damage} damage | remaining health: ${health} | remaining stamina: ${stamina} `)
        else p.append(`You missed and took ${damage} damage! | remaining health: ${health} | remaining stamina: ${stamina}`)  
        
    }else{
        if(hit === true) p.append(`Enemy did ${damage} damage | remaining health: ${health}`)
        else p.append(`Enemy missed and took ${damage} damage! | remaining health: ${health}`)
    }
    combatHistory.appendChild(p)
}

const damageMath = [
    '', '7', '5', '3', '2', '1', 
    '', '', '', '', '', '', '', '', '', '',
    '1.5', '2', '3', '5', '7'
]

const characterButtons = document.querySelectorAll('.characterSelect')
const characterButtonsArray = Array(...characterButtons)
    .forEach( (button) => button.addEventListener('click', createPlayerCharacter) )

const enemyButtons = document.querySelectorAll('.enemySelect')
const enemyButtonsArray = Array(...enemyButtons)
    .forEach( (button) => button.addEventListener('click', createNPC) )