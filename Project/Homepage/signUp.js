document.querySelector('form').addEventListener('submit',collectSignInData)
let SignInData = JSON.parse(localStorage.getItem('userData'))||[]
function collectSignInData(){
    event.preventDefault()
    let firstname = document.querySelector('#fName').value
    let lastname = document.querySelector('#lName').value
    let email = document.querySelector('#signEmail').value
    let pass = document.querySelector('#signPass').value
    if(firstname==''||lastname==''||email==''||pass==''){
        alert('Please fill all fields')
    }
    else{
        let signObj = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:pass
        }
        SignInData.push(signObj)
        localStorage.setItem('userData',JSON.stringify(SignInData))
        window.location.href = 'login.html'
    }

}

document.querySelector('#profile').addEventListener('click',goToLogin)

function goToLogin(){
    window.location.href = 'login.html'
}