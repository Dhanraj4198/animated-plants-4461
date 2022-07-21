let cartContent =JSON.parse(localStorage.getItem('cartEle'))|| []

displayCart(cartContent)

function displayCart(cartContent){
    document.querySelector('#cartPage').innerHTML = ''
    cartContent.forEach(function(el,index){
        let inCart = document.createElement('div')
        inCart.setAttribute('id','cartItem')
        let datadiv = document.createElement('div')
        datadiv.setAttribute('id','cartData')
        let namediv = document.createElement('div')
        namediv.setAttribute('id','prodName')
        let priceDiv = document.createElement('div')
        priceDiv.setAttribute('id','prodPrice')
        let image = document.createElement('img')
        image.setAttribute('src',el.image)
        let name = document.createElement('p')
        name.innerText = el.name
        let price = document.createElement('p')
        price.innerText ='RS: ' + el.Price
        price.style.color = '#ff6781'
        price.style.fontSize = '30px'
        let lessBtn = document.createElement('button')
        lessBtn.innerText = '<'
        let moreBtn = document.createElement('button')
        moreBtn.innerText = '>'
        let quantity = document.createElement('input')
        quantity.setAttribute('value','1')
        quantity.setAttribute('class','qty')
        let removeBtn = document.createElement('button')
        removeBtn.innerText = 'X'
        removeBtn.addEventListener('click',function(){
            removeCart(el,index)
        })
        priceDiv.append(lessBtn,quantity,moreBtn,price)
        namediv.append(name,removeBtn)
        datadiv.append(namediv,priceDiv)
        inCart.append(image,datadiv)
        document.querySelector('#cartPage').append(inCart)
    })
}

function removeCart(index){
    cartContent.splice(index,1)
    localStorage.setItem('cartEle',JSON.stringify(cartContent))
    displayCart(cartContent)
    console.log(cartContent)
}
let quantity = cartContent.length

document.querySelector('#quantity').innerText = '('+quantity+')'
let openCartButton = document.querySelector('#cartIcon')
let closeCartButton = document.querySelector('#closeCart')
openCartButton.addEventListener('click',openCartPage)
function openCartPage(){
    console.log(event);
document.querySelector('#cart').setAttribute('class','active')
document.querySelector('#overlay').setAttribute('class','active')
}
closeCartButton.addEventListener('click',closeCartPage)
function closeCartPage(){
    document.querySelector('#cart').removeAttribute('class','active')
document.querySelector('#overlay').removeAttribute('class','active')
}
let cartTotal = 0
cartContent.forEach(function(el){
    cartTotal+= +el.Price
})
document.querySelector('#pricing>p').innerText = 'Rs: '+ cartTotal
