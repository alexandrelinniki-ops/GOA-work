// 1)შექმენი კლასი Book, რომელსაც ექნება შემდეგი თვისებები:
// title (სათაური)
// author (ავტორი)
// isRead (წაკითხულია თუ არა, საწყისი მნიშვნელობა false)
// მეთოდები:
// read() — ცვლის isRead-ს true-ზე და კონსოლში ბეჭდავს: "თქვენ წაიკითხეთ წიგნი: [სათაური]".
// getDetails() — აბრუნებს ტექსტს: "[სათაური]" - [ავტორი], [წაკითხულია/არ არის წაკითხული].
// შექმენი 2 წიგნის ობიექტი, ერთ-ერთზე გამოიძახე read() მეთოდი და ბოლოს ორივეს getDetails() დალოგე.

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isRead = false;
    }

    read() {
        this.isRead = true;
        console.log(`თქვენ წაიკითხეთ წიგნი: ${this.title}`);
    }

    getDetails() {
        return `"${this.title}" - ${this.author}, ${this.isRead ? "წაკითხულია" : "არ არის წაკითხული"}`;
    }
}

const book1 = new Book("ვეფხისტყაოსანი", "შოთა რუსთაველი");
const book2 = new Book("1984", "ჯორჯ ორუელი");

book1.read();

console.log(book1.getDetails());
console.log(book2.getDetails());


// 2) შექმენი კლასი Student, რომელსაც ექნება თვისებები: name (სახელი) და grades (ნიშნების მასივი, რომელიც თავიდან ცარიელია []).
// მეთოდები:
// addGrade(grade) — ამოწმებს, არის თუ არა ნიშანი 1-დან 10-მდე. თუ არის, ამატებს მასივში. თუ არა, ბეჭდავს შეტყობინებას: "არასწორი ნიშანია!".
// getAverage() — ითვლის და აბრუნებს სტუდენტის საშუალო ნიშანს (ყველა ნიშნის ჯამი გაყოფილი მათ რაოდენობაზე).
// შექმენი სტუდენტი, დაუმატე ნიშნები: 8, 9, 10 და გამოიტანე მისი საშუალო.

class Student {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(grade) {
        if (grade >= 1 && grade <= 10) {
            this.grades.push(grade);
        } else {
            console.log("არასწორი ნიშანია!");
        }
    }

    getAverage() {
        let sum = this.grades.reduce((acc, curr) => acc + curr, 0);
        return sum / this.grades.length;
    }
}

const student1 = new Student("ალექსანდრე");

student1.addGrade(8);
student1.addGrade(9);
student1.addGrade(10);

console.log("საშუალო ნიშანი:", student1.getAverage());


// 3) შექმენი კლასი Movie თვისებებით: title (ფილმის სახელი), price (ბილეთის ფასი) და availableSeats (თავისუფალი ადგილების რაოდენობა, მაგალითად 5).
// მეთოდები:
// buyTicket(quantity) — პარამეტრად იღებს ბილეთების რაოდენობას, რომლის ყიდვაც სურთ.
// თუ თავისუფალი ადგილები საკმარისია (availableSeats >= quantity), დააკელი ადგილებს ეს რაოდენობა და დალოგე: "თქვენ წარმატებით შეიძინეთ [quantity] ბილეთი. გადასახდელია: [ფასი * რაოდენობა] ლარი".
// თუ ადგილები არ არის საკმარისი, დაბეჭდე: "სამწუხაროდ, მხოლოდ [availableSeats] ადგილია დარჩენილი".
// სცადე ჯერ 3 ბილეთის ყიდვა, მავე ფილმზე შემდეგ კიდევ 3-ის ყიდვა და ნახე რა მოხდება.

class Movie {
    constructor(title, price, availableSeats) {
        this.title = title;
        this.price = price;
        this.availableSeats = availableSeats;
    }

    buyTicket(quantity) {
        if (this.availableSeats >= quantity) {
            this.availableSeats -= quantity;
            console.log(`თქვენ წარმატებით შეიძინეთ ${quantity} ბილეთი. გადასახდელია: ${this.price * quantity} ლარი`);
        } else {
            console.log(`სამწუხაროდ, მხოლოდ ${this.availableSeats} ადგილია დარჩენილი`);
        }
    }
}

const movie1 = new Movie("Avengers", 15, 5);

movie1.buyTicket(3);
movie1.buyTicket(3);


// 4) შექმენი კლასი Car თვისებებით: brand (მარკა) და speed (სიჩქარე, რომელიც საწყის ეტაპზე ყოველთვის არის 0).
// მეთოდები:
// accelerate() — ზრდის სიჩქარეს 20-ით.
// iShowSpeed() — კონსოლში ბეჭდავს: "[brand]-ის სიჩქარეა: [speed] კმ/სთ".
// შექმენი მანქანა (მაგ: "BMW"). გამოიძახე accelerate() ორჯერ და შემდეგ შეამოწმე სიჩქარე showSpeed()-ით.

class Car {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }

    accelerate() {
        this.speed += 20;
    }

    iShowSpeed() {
        console.log(`${this.brand}-ის სიჩქარეა: ${this.speed} კმ/სთ`);
    }
}

const car1 = new Car("BMW");

car1.accelerate();
car1.accelerate();

car1.iShowSpeed();

// 5) შექმენი კლასი SimpleCalculator. ამ კლასს კონსტრუქტორი და შიდა თვისებები საერთოდ არ სჭირდება.
// add(a, b) — აბრუნებს a + b-ს.multiply(a, b) — აბრუნებს a * b-ს.
// შექმენი კალკულატორის ობიექტი და დალოგე calculator.add(5, 10) და calculator.multiply(4, 3)

class SimpleCalculator {
    add(a,b) {
        return a + b;
    }

    multiply(a,b) {
        return a * b;
    }
}

const calculator = new SimpleCalculator();

console.log(calculator.add(5, 10)); 
console.log(calculator.multiply(4, 3));


// 6)შექმენი კლასი Rectangle.
// კონსტრუქტორი იღებს ორ პარამეტრს: width (სიგანე) და height (სიმაღლე).
// getArea() — ითვლის და აბრუნებს მართკუთხედის ფართობს (სიგანე გამრავლებული სიმაღლეზე).
// შექმენი მართკუთხედი გვერდებით 5 და 4, გამოიძახე getArea() და ნახე, დაგიბრუნებს თუ არა 20-ს.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(5, 4);

console.log(rectangle.getArea());