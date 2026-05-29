// 1. ეს კოდი ჩასვი შენს HTML ფაილში. აქ გვაქვს ერთი div (), შიგნით ტექსტი () და ღილაკი ().div p button
// <div id="card" style="border: 2px solid #333; padding: 20px; width: 200px; background-color: #f0f0f0;">
//     <p id="info-text">მოკლე აღწერა: ეს არის სტანდარტული პროდუქტი.</p>
//     <button id="action-btn">დეტალურად</button>
// </div>
// დაწერე JavaScript კოდი, რომელიც ღილაკზე () დაჭერისას შეასრულებს შემდეგ ცვლილებებს:#action-btn
// სიგანის შეცვლა (width):  ბლოკის სიგანე 200px-დან გახდეს 400px.#card
// ფონის ფერის შეცვლა (background-color): ბლოკის ფონი გახდეს მუქი ლურჯი.
// ტექსტის შეცვლა: ტექსტი შეიცვალოს უფრო ვრცელი აღწერით: "სრული აღწერა: ეს პროდუქტი დამზადებულია უმაღლესი ხარისხის მასალისგან და აქვს 2 წლიანი გარანტია!"#info-text
// ტექსტის ფერის შეცვლა (color): ვინაიდან ფონი მუქდება, ტექსტის ფერი თეთრი () გახდეს, რომ გამოჩნდეს.
// ღილაკის ტექსტის შეცვლა: თავად ღილაკზე "დეტალურად"-ის ნაცვლად დაეწეროს "დახურვა".

const changeText = () => {

    let card = document.getElementById("card");
    let infoText = document.getElementById("info-text");
    let button = document.getElementById("action-btn");

    card.style.width = "400px";
    card.style.backgroundColor = "darkblue";
    infoText.textContent ="hello!";
    infoText.style.color = "white";
    button.textContent = "close it!";

}


// 2. ტექსტის შეცვლა (Selection & Content)
// მიზანი: getElementById - ის გამოყენება.
// დავალება: შექმენით HTML ფაილი, სადაც იქნება ერთი <h1> სათაური (აიდით "main-title") და ერთი ღილაკი.
// ინსტრუქცია: ღილაკზე დაჭერისას, JavaScript-ის საშუალებით შეცვალეთ სათაურის ტექსტი და გახადეთ: "ტექსტი წარმატებით შეიცვალა!". გამოიყენეთ ორივე მეთოდი სხვადასხვა ცვლადში შესანახად.

const changeTitle = () => {

    let title = document.getElementById("main-title");
    title.textContent = "Title's changed";

}


// 3. სტილების მასიური შეცვლა (Class)
// მიზანი: getElementsByClassName - ის გამოყენება.
// დავალება: შექმენით 3 პარაგრაფი (<p>) ერთი და იგივე კლასით "text-item".
// ინსტრუქცია: JavaScript-ით იპოვეთ ყველა ეს პარაგრაფი კლასის მიხედვით და თითოეულს შეუცვალეთ ფერი (მაგალითად, გახადეთ წითელი).

const changeColor = () => {
    
    let paragraphs = document.getElementsByClassName("text-item");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }

}