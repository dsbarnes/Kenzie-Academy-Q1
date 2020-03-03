const userName = document.getElementById("username")
const userEmail = document.getElementById("email")
const password = document.getElementById("password")

const mobilPhone = document.getElementById('mobilePhone')
const homepage = document.getElementById('homepage')

const preferredCommunication = document.querySelectorAll('.preferredCommunication')
const decvices = document.querySelectorAll('.devices')
const userTpye = document.querySelectorAll('.userType')


//Adding click to button
document.getElementById('resetButton').addEventListener('click', resetForm)
document.querySelector('form').addEventListener("submit", testFun)


function resetForm(){
    //get that later I suppose.
}

//Button Click Function
function testFun() {
    
    //Prevents some default <form> behavior w/ this line of code:
    event.preventDefault()
    //LastPass fucks w/ shit by expecting a password in the PUT request
    //This line fixes that:
    event.stopPropagation()

    let preferredCommunicationArray = []
    for(n of preferredCommunication){
        if( n.checked){
            preferredCommunicationArray.push(n.dataset.name)
        }
    }
    
    let deviceArray = []
    for(n of decvices){
        if(n.checked){
            deviceArray.push(n.dataset.name)
        }
    }

    let passAsUserType = ''
    for(n of userTpye){
        if(n.checked){
            passAsUserType = n.dataset.name
        }
    }

    const userInfo = {
        userName: userName.value,
        userEmail: userEmail.value,
        password: password.value,
        mobilPhone: mobilPhone.value,
        homepage: homepage.value,
        preferredCommunication: preferredCommunicationArray,
        devices: deviceArray,
        userType: passAsUserType
    }

    console.log(userInfo)

    fetch('./api/users', {
       method: 'POST' ,
       headers: {'Content-Type' : 'application/json'},
       body: JSON.stringify(userInfo)
    })
}
