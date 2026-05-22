// 2) html ში შექმენით h1, შემდეგ javascript იდან გასტილეთ ეს h1 და შეცვალეთ ტექსტის innerHTML, უმჯობესი იქნება ბევრი სტილი ქონდეს

let title = document.getElementById("title");
title.innerHTML = "გამარჯობა JavaScript!";
title.style.color = "blue";

console.log("title")


// 3) შექმენი ფუნქცია სახელით . შიგნით ჩაწერე ცვლადი .Box()x = 0;
// ამავე ფუნქციაში შექმენი:this
// this.setX(value) — რომელიც ჩაწერს ახალ რიცხვს.x
// this.getX() — რომელიც დააბრუნებს ჩაწერილ რიცხვს.x
// შექმენი ახალი ყუთი -ის გამოყენებით.new Box()
// setX მეთოდით შიგნით ჩაწერე რიცხვი 10.
// getX მეთოდით წაიკითხე ეს რიცხვი და დაბეჭდე ეკრანზე.

function Box() {
    let x = 0;

    this.setX = function(value) {
        x = value;
    };

    this.getX = function() {
        return x;
    };
}

let box = new Box();

box.setX(10);

console.log(box.getX());



// 4) შექმენი ფუნქცია-კონსტრუქტორი სახელით .Profile(name)
// მას პარამეტრად გადაეცი მხოლოდ ერთი რამ —  (სახელი).name
// ფუნქციის შიგნით შექმენი ორი მეთოდი:this
// this.setName(newName) — რომელიც ძველ სახელს შეცვლის ახალი სახელით.
// this.getName() — რომელიც უბრალოდ დააბრუნებს მიმდინარე სახელს.
// new Profile("Giorgi")-ით შექმენი ახალი მომხმარებელი (სახელით გიორგი).
// ეკრანზე გამოიტანე სახელი  მეთოდით (უნდა დაწეროს "Giorgi").getName()
// ახლა  მეთოდით შეცვალე სახელი.setName("Anano")
// ხელახლა გამოიტანე სახელი ეკრანზე  მეთოდით (ახლა უნდა დაწეროს "Anano").getName()

function Profile(name) {
    this.name = name;

    this.setName = function(newName) {
        this.name = newName;
    };

    this.getName = function() {
        return this.name;
    };
}

let user = new Profile("Giorgi");

console.log(user.getName());

user.setName("Anano");

console.log(user.getName());