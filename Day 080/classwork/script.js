// 1) მომხმარებელს ინფუთ თეგის საშუალებით შემოაყვანინეთ რაიმე ფერი 
// და ღილაკზე დაკლიკების შემდეგ მთლიანი საიტის ფერი უნდა შეიცვალოს იმ ფერით რასაც მომხმარებელი შემოიყვანს.

const input = document.getElementById("colorInput");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = input.value;
});


// 2) html ში შექმენით ერთი პარაგრაფი და 2 ღილაკი "+" და "-" 
// პლიუსზე დაჭერისას უნდა უნდა გაიზარდოს პარაგრაფის ფონტ საიზი 
// და - ზე დაჭერისას უნდა დააკლდეს თან რანდომულად უნდა ცვლიდეს ტექსტის ფერს.

const text = document.getElementById("text");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const colors = ["red", "blue", "black", "green", "yellow", "purple", "pink", "white", "orange", "gray", "cyan", "brown", "magenta", "aqua"]

let fontSize = 16;

plus.addEventListener("click", () => {
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
    const randomIndex = Math.floor(Math.random() * colors.length)
    text.style.color = colors[randomColor];
});

minus.addEventListener("click", () => {
    fontSize -= 2;
    text.style.fontSize = fontSize + "px";
    const randomIndex = Math.floor(Math.random() * colors.length)
    text.style.color = colors[randomIndex];
});
