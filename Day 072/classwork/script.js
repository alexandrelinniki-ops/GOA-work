// 1)ახსენით რა არის მოვლენა და რას აკეთებს მოვლენის მსმენელი js ში

// მოვლენა არის მოქმედება, რომელიც ხდება ვებგვერდზე.


// 2) გააკეთეთ საიტი სადაც გექნებათ ერთი div მისი სიგანე უნდა იყოს თავდაპირველად width:200px, height:200px, 
// როდესაც მაუსის კურსორს მიიტანთ div თან უნდა გაიზარდოს ის როგორც სიგანეში ასევე სიმაღლეში, 
// გამოიყენეთ mouseover მოვლენა

const div = document.querySelector("div")

div.addEventListener("mouseover", () => {
    div.style.width = "300px";
    div.style.height = "300px";
}) 


// 3) გააკეთეთ საიტი სადაც გექნებათ ერთი პარაგრაფი და ერთი ღილაკი, როდესაც ღილაკს დააწვებით, 
// უნდა შეიცვალოს პარაგრაფის ფერი და ტექსტი

const p = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    p.innerHTML = "Paragraph is changed!";
    p.style.color = "blue";
});

// 4) მომხმარებელს შემოატანინეთ სახელი გვარი ემაილი და პაროლი 
// შემდეგ ესენი შეინახეთ ობიექტში და გამოიტანეთ კონსოლში მომხმარებლის ინფორმაცია

const Firstname = document.getElementById("Firstname");
const Lastname = document.getElementById("Lastname");
const email = document.getElementById("email");
const password = document.getElementById("password")
const button1 = document.querySelector("button1");

const user = {};

button1.addEventListener("click", () => {
    user.Firstname = Firstname.value
    user.Lastname = Lastname.value
    user.email = email.value
    user.password = password.value
    console.log(value)
})




// ეს ყველაფერი უნდა გააკეთოთ addEventListener ით