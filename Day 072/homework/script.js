// 1) მომხმარებელს შეამოატანინეთ მისი ინფორმაცია ჩასვით ობიექტში და კონსოლში გამოიტანეთ 
// რამდენი მომხმარებელიც შემოვა ყველა მომხმარებელი გამოიტანეთ ერთ ობიექტში.

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const btn = document.querySelector("btn")

const users = {};

btn.addEventListener("click", () => {
    user.name = name.value
    user.surname = surname.value
    user.email = email.value
    console.log(value)
});


// 2) გააკეთეთ counter addEventListener ის გამოყენებით html ში გააკეთეთ ორი ღილაკი "-" და "+" 
// და ერთი პარაგრაფი რიცხვის მთვლელისთვის როდესაც "+" დააკლიკებთ პარაგრაფს მოემატოს რიცხვი ერთით 
// "-" ზეც ანალოგიურად ოღონდ დააკლდეს რიცხვი.

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

let count = 0;

plus.addEventListener("click", () => {
    count++;
    document.getElementById("count").textContent = count;
});

minus.addEventListener("click", () => {
    count--;
    document.getElementById("count").textContent = count;
});


// 3) გააკეთეთ ერთ შავი დივი და ქვემოთ სამი ღილაკი: "მწვანე", "წითელი", "ლურჯი" 
// თითოეულ ღილაკზე დაჭერისას უნდა შეიცვალოს ფერი დივმა და გახდეს ის ფერი 
// რომელზეც დააკლიკეთ აქაც გამოიყენეთ addEventListener.

const box = document.getElementById("box");
const green = document.getElementById("green")
const red = document.getElementById("red")
const blue = document.getElementById("blue")

const changeColor = () => {
    green.addEventListener("click", () => {
        box.style.backgroundColor = "green";
    });

    red.addEventListener("click", () => {
        box.style.backgroundColor = "red";
    });

    blue.addEventListener("click", () => {
        box.style.backgroundColor = "blue";
    });
}
