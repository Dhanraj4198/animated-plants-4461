LogInData = JSON.parse(localStorage.getItem('userData'))||[]
document.querySelector('#loginForm').addEventListener('submit',compareData)
let flag = false
function compareData(){
    event.preventDefault()
   let mail = document.querySelector('#logEmail').value
   let pass = document.querySelector('#logPass').value
   if(mail == ''||pass == ''){
    alert('please fill all fields')
   }else{
    LogInData.forEach(function(el){
        if(el.email==mail && el.password == pass){
            falg = true
            localStorage.setItem('flag',true)
            let logged = {
                firstName: el.firstname,
                surname:el.lastname
               }
               console.log(logged)
               localStorage.setItem('loggedPerson',JSON.stringify(logged))
               window.location.href = 'index.html'
        }
           })
        }
   }
 

document.querySelector('#profile').addEventListener('click',goToLogin)

function goToLogin(){
    if(flag){
        window.location.href = 'account.html'
    }else{
        window.location.href = 'login.html'
    }
   
}
