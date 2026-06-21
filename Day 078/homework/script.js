// დავალება 1: "წიგნების ბიბლიოთეკა" (მარტივი)
// ეს დავალება დაეხმარებათ კონსტრუქტორის და მარტივი მეთოდების გათავისებაში.
// შექმენით კლასი Book.
// კონსტრუქტორი: უნდა იღებდეს წიგნის სათაურს (title), ავტორს (author) და გამოცემის წელს (year).
// მეთოდი getSummary(): უნდა აბრუნებდეს ტექსტს: "წიგნი 'სათაური' დაწერილია 'ავტორი'-ს მიერ 'წელი' წელს."
// მეთოდი getAge(): უნდა აბრუნებდეს, რამდენი წლისაა წიგნი (მიმდინარე წელს გამოკლებული გამოცემის წელი).

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `წიგნი '${this.title}' დაწერილია '${this.author}'-ს მიერ ${this.year} წელს.`;
    }

    getAge() {
      const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const book1 = new Book(
    "ვეფხისტყაოსანი",
    "შოთა რუსთაველი",
    1200
);

console.log(book1.getSummary());
console.log(`წიგნის ასაკი: ${book1.getAge()} წელი`);


// დავალება 2: "მართკუთხედის კალკულატორი" (Getter/Setter)
// აქ სტუდენტებმა უნდა ისწავლონ, როგორ გამოიყენონ get და set მონაცემების ვალიდაციისთვის.
// შექმენით კლასი Rectangle.
// კონსტრუქტორი: იღებს სიგანეს (width) და სიმაღლეს (height).
// Getter-ები: area (ფართობი) და perimeter (პერიმეტრი). ეს მნიშვნელობები არ უნდა იყოს შენახული როგორც ცვლადები, არამედ უნდა ითვლებოდეს დინამიურად.
// Setter-ები: სიგანის და სიმაღლის შეცვლისას დაამატეთ შემოწმება: თუ გადაცემული მნიშვნელობა ნაკლებია ან ტოლია 0-ზე, გამოიტანეთ შეცდომა (ან დააყენეთ დეფოლტ მნიშვნელობა 1).

class Rectangle {
    constructor(width, height) {
        this._width = width > 0 ? width : 1;
        this._height = height > 0 ? height : 1;
    }

    get area() {
        return this._width * this._height;
    }

    get perimeter() {
        return 2 * (this._width + this._height);
    }

    set width(newWidth) {
        if (newWidth <= 0) {
            console.error("სიგანე უნდა იყოს 0-ზე მეტი!");
            this._width = 1;
        } else {
            this._width = newWidth;
        }
    }

    set height(newHeight) {
        if (newHeight <= 0) {
            console.error("სიმაღლე უნდა იყოს 0-ზე მეტი!");
            this._height = 1;
        } else {
            this._height = newHeight;
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}

const rect = new Rectangle(10, 5);

console.log("ფართობი:", rect.area);
console.log("პერიმეტრი:", rect.perimeter);

rect.width = 20;
rect.height = 8;

console.log("ახალი ფართობი:", rect.area);
console.log("ახალი პერიმეტრი:", rect.perimeter);

rect.width = -3;
console.log("სიგანე:", rect.width);


// დავალება 3: "მომხმარებლის პროფილი" (კომპლექსური)
// ეს დავალება აერთიანებს ყველაფერს და ამატებს უსაფრთხოების ელემენტს.
// შექმენით კლასი User.
// პარამეტრები: username, email და _password (ქვედა ტირე მიანიშნებს, რომ ეს "Private" ცვლადია).
// Getter password: პაროლის წაკითხვის მცდელობისას უნდა აბრუნებდეს დაფარულ ტექსტს (მაგ: "********"), უსაფრთხოების მიზნით.
// Setter password: პაროლის შეცვლამდე უნდა ამოწმებდეს, არის თუ არა ახალი პაროლი მინიმუმ 8 სიმბოლო. თუ არ არის, დაბეჭდოს: "პაროლი ძალიან მოკლეა!".
// მეთოდი changeEmail(newEmail): რომელიც შეცვლის იმეილს მხოლოდ იმ შემთხვევაში, თუ ახალი იმეილი შეიცავს @ სიმბოლოს.

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this._password = password;
    }

    get password() {
        return "********";
    }

    set password(newPassword) {
        if (newPassword.length < 8) {
            console.log("პაროლი ძალიან მოკლეა!");
        } else {
            this._password = newPassword;
        }
    }

    changeEmail(newEmail) {
        if (newEmail.includes("@")) {
            this.email = newEmail;
        } else {
            console.log("არასწორი Email!");
        }
    }
}

const user1 = new User(
    "Alex",
    "alex@gmail.com",
    "password123"
);

console.log(user1.password);

user1.password = "12345";

user1.password = "newpassword123";

user1.changeEmail("alex_new@gmail.com");
console.log(user1.email);

user1.changeEmail("alexgmail.com");