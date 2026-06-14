// 1) მომხმარებელს შეამოატანინეთ მისი ინფორმაცია 
// ჩასვით ობიექტში და კონსოლში გამოიტანეთ რამდენი მომხმარებელიც შემოვა ყველა მომხმარებელი 
// გამოიტანეთ ერთ ობიექტში.

const users = [];

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    users.push(user);

    console.log(users);

})


// 2) გააკეთეთ counter addEventListener ის გამოყენებით html ში 
// გააკეთეთ ორი ღილაკი "-" და "+". 
// ერთი პარაგრაფი რიცხვის მთვლელისთვის როდესაც "+" დააკლიკებთ პარაგრაფს მოემატოს რიცხვი ერთით 
// "-" ზეც ანალოგიურად ოღონდ დააკლდეს რიცხვი.

const count = 0;

const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

minusBtn.addEventListener("click", () => {
    count--;
    counter.textContent = count;
});



// 3) გააკეთეთ ერთ შავი დივი და ქვემოთ სამი ღილაკი: "მწვანე", "წითელი", "ლურჯი" 
// თითოეულ ღილაკზე დაჭერისას უნდა შეიცვალოს ფერი დივმა და გახდეს ის ფერი 
// რომელზეც დააკლიკეთ აქაც გამოიყენეთ addEventListener.

const box = document.getElementById("box");

const greenBtn = document.getElementById("green");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");

greenBtn.addEventListener("click", () => {
    box.style.backgroundColor = "green";
}); 


redBtn.addEventListener("click", () => {
    box.style.backgroundColor = "red";
});

blueBtn.addEventListener("click", () => {
    box.style.backgroundColor = "blue";
});
