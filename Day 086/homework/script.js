const product = Array.from(document.getElementsByClassName("product"));
let cart = [];

product.forEach(product => {
    const button = product.querySelector("button");
    button.addEventListener("click", () => {
        let info = {
            name: product.querySelector("h2").textContent,
            price: product.querySelector("p").textContent,
            quartery: 1
        }
        const exists = cart.find(item => item.name === info.name);
        if(exists){
            exists.quartery += 1
        }else{
            cart.push(info)
        }
        render()
        console.log(cart)
    })

    const render = () => {
        cart.forEach(pro => {
            const div = document.createElement("div")
            div.innerHTML = `
            <h3>${pro.name}</h3>
            <p>${pro.price}</p>
            <p>${pro.quartery}</p>
            `
        })
    }
})