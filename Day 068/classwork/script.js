// 1) შექმენი constructor სახელით book კონსტრუქტორში უნდა გადაეცეს properties: სათაური, ავტორი, ფასი 
// შიგნით შექმენი მეთოდი getInfo() რომელიც კონსოლში დაბეჭდავს ტექსტს ასე 
// "წიგნის სათაურია [სათაური] ავტორი [ავტორი], და ფასი [ფასი]" 
// შემდეგ გამოიძახე ეს კონსტრუქტორი და გადაეცი ორი მაგალითი

// 1)
function book(title, author, price) {
    this.title = title,
    this.author = author,
    this.price = price,
    this.getInfo = () => {
        console.log(`წიგნის სათაურია: ${this.title}, ავტორი: ${this.author} და ფასი: ${this.price}`)
    }
}

const book1 = new book("ვეფხისტყაოსანი", "შოთა რუსთაველი", 25);
const book2 = new book("Harry Potter", "J.K. Rowling", 40);

book1.getInfo();
book2.getInfo();

// 2) შექმენი ფუნქცია-კონსტრუქტორი სახელით .PiggyBank() ამ ფუნქციის შიგნით შექმენი უბრალო ცვლადი .money = 0; ამავე ფუნქციის შიგნით, შექმენი ორი მეთოდი:this
// this.setMoney — რომელიც შეცვლის ყულაბაში არსებულ თანხას.
// this.getMoney — რომელიც დააბრუნებს ყულაბაში არსებულ თანხას.
// new ოპერატორით შექმენი ახალი ყულაბა.
// setMoney მეთოდით ჩააგდე შიგნით 50 ლარი.
// getMoney მეთოდით შეამოწმე და ეკრანზე გამოიტანე რამდენი ლარია ყულაბაში.

function PiggyBank() {
    this.money = 0;
    this.setMoney = () => {
        this.money = amount;
    };
    this.getMoney = () => {
        return this.money;
    };
}

const myPiggyBank = new PiggyBank();
myPiggyBank.setMoney(50);
console.log("ყულაბაში არის " + myPiggyBank.getMoney() + " ლარი");