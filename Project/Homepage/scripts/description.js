let dataOfProduct = JSON.parse(localStorage.getItem('descriptionOfOneProduct'))||{}
console.log(dataOfProduct);
display(dataOfProduct)
function display(dataOfProduct){
        
        let imgDiv = document.createElement('div')
        let contentDiv = document.createElement('div')
        let priceDiv = document.createElement('div')
        priceDiv.setAttribute('id','proPrice')
        let image = document.createElement('img')
        image.setAttribute('src',dataOfProduct.image)
        console.log(image)
        let price = document.createElement('p')
        price.innerText = 'Rs: '+ dataOfProduct.Price
        price.style.color = '#ff6781'
        let discount = document.createElement('p')
        discount.innerText ='Rs: ' +dataOfProduct.strikedPrice
        discount.style.textDecoration = 'line-through'
        let name = document.createElement('h2')
        name.innerText = dataOfProduct.name
        name.setAttribute('id','prodName')
        let cartBtn = document.createElement('button')
        cartBtn.innerText = 'ADD TO CART'
        cartBtn.setAttribute('class','cart')
        cartBtn.addEventListener('click',function(){
        addToCart(dataOfProduct)
        })
        imgDiv.append(image)
        priceDiv.append(discount,price)
        contentDiv.append(name,priceDiv,cartBtn)
        document.querySelector('#singleProduct').append(imgDiv,contentDiv)

}
let cartsArr = JSON.parse(localStorage.getItem('cartEle'))||[]
function addToCart(dataOfProduct){
    cartsArr.push(dataOfProduct)
    localStorage.setItem('cartEle',JSON.stringify(cartsArr))
    location.reload()
    
}
