let imgLink = [
   'https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_7f3df301-1d23-4327-800b-8b63bccfd0a6.webp?v=1657012016',
   "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/green_desk_50d0a315-fd1c-45c7-92bf-a7c45753d5b9.jpg?v=1655953516"
    
]
let leftBtn = document.getElementById('left')
let rightBtn = document.getElementById('right')
let carousel = document.getElementById('carousel')
let imageState = 0
rightBtn.addEventListener('click',function(){
    imageState++
    if(imageState==imgLink.length){
        imageState=0
    }
    carousel.src = imgLink[imageState]
})
leftBtn.addEventListener('click',function(){
    imageState--
    if(imageState<0){
        imageState = imgLink.length-1
    }
    carousel.src = imgLink[imageState]
})
document.querySelector('#profile').addEventListener('click',goToLogin)
let flags = JSON.parse(localStorage.getItem('flag'))
function goToLogin(){
    if(flags){
        window.location.href = 'account.html'
    }else{
        window.location.href = 'login.html'
    }
    }


   