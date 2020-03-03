const userName = document.getElementById("username")
const userEmail = document.getElementById("email")
const password = document.getElementById("password")

//Adding click to button
document.querySelector('form').addEventListener("submit", testFun)


//Button Click Function
function testFun() {
    event.preventDefault()
    //For LastPass expecting a password field
    event.stopPropagation()

    const userInfo = {
        userName: userName.value,
        userEmail: userEmail.value,
        password: password.value,
    }

    console.log(userInfo)
    
    fetch('./api/users', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(userInfo)
    })
}
