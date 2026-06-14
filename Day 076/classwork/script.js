// 1) შექმენით მაღაზიის საიტი საიტზე გქონდეს 5 პროდუქტი თავისი ინფორმაციით(სახელი, ფასი, აღწერა, ფოტო) 
// ასევე თითოეულ პროდუქტს ქონდეს addtocart ღილაკი რის შემდეგაც პროდუქტი ჩაემატება cart მასივში, 
// შემდეგ კონსოლში გამოიტანეთ ეს cart მასივი
// 2) თქვენ პროექტს დაუმატეთ დარენდერება და კალათიდან წაშლა

const products = Array.from(document.getElementsByClassName("product"))
const cartDiv = document.getElementById("cartDiv")

let cart = []

const renderCard = () => {

    cartDiv.innerHTML = ""
    cart.forEach((item,index) =>{
        let product = document.createElement("div");
        product.className = "product";

        product.innerHTML = `
        <h2>${item.productName}</h2>
        <p>${item.price}</p>
        <button onclick="deleteProduct(${index})">Delete</button>
        `

        cartDiv.appendChild(product)

    })
}


const Cart = (product) => {

    const productObj = {
        productName: product.querySelector("h3").textContent,
        price: product.querySelector("p").textContent,
    }

    cart.push(productObj)
    console.log(cart)
}


product.forEach((item,index) => {

    const button = item.querySelector("button");

    button.addEventListener("click", () => {
        Cart(item)
    })
})

const Delete = (index) => {
    cart = cart.filter(items = items !== index)
}