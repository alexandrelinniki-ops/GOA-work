// 1) შექმენი კლასი Product თვისებებით: name (დასახელება) და price (ორიგინალი ფასი).
// applyDiscount(percentage) — იღებს ფასდაკლების პროცენტს (მაგალითად 20 ნიშნავს 20%-იან ფასდაკლებას) და აკლებს ამ პროცენტს პროდუქტის არსებულ ფასს (price).
// getInfo() — ბეჭდავს ტექსტს: "[პროდუქტის სახელი] ღირს [მიმდინარე ფასი] ლარი".
// შექმენი პროდუქტი 100 ლარიანი ფასით. აამუშავე 15%-იანი ფასდაკლება და გამოიძახე getInfo(), რომ ნახო ახალი ფასი.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    applyDiscount(percentage) {
        this.price -= this.price * (percentage / 100);
    }

    getInfo() {
        console.log(`${this.name} ღირს ${this.price} ლარი`);
    }
}

const product = new Product("ყურსასმენი", 100);

product.applyDiscount(15);
product.getInfo();


// 2) შექმენი კლასი SmartPhone თვისებებით: model (მოდელი) და battery (ელემენტის პროცენტი, საწყისი მნიშვნელობა 50).
// charge() — ზრდის ბატარეის მუხტს 15-ით. მნიშვნელოვანია: თუ ბატარეა 100-ს გადასცდება, მნიშვნელობა მაინც 100-ზე გააჩერე.
// showStatus() — კონსოლში ბეჭდავს: "[model]-ის ბატარეა არის [battery]%".
// შექმენი ტელეფონი, გამოიძახე charge() რამდენჯერმე და ნახე, გაჩერდება თუ არა მაქსიმუმ 100-ზე.

class SmartPhone {
    constructor(model, battery = 50) {
        this.model = model;
        this.battery = battery;
    }

    charge() {
        this.battery += 15;

        if (this.battery > 100) {
            this.battery = 100;
        }
    }

    showStatus() {
        console.log(`${this.model}-ის ბატარეა არის ${this.battery}%`);
    }
}

const phone = new SmartPhone("iPhone 15");

phone.charge();
phone.charge();
phone.charge();
phone.charge();

phone.showStatus();


// 3) შექმენი კლასი SchoolPupil თვისებებით: name (სახელი) და gradeLevel (კლასი, მაგალითად 5 — ანუ მეხუთე კლასელი).
// promote() — ზრდის gradeLevel-ს 1-ით (გადადის შემდეგ კლასში).
// getInfo() — აბრუნებს ტექსტს: "[name] არის მე-[gradeLevel] კლასის მოსწავლე".
// შექმენი მოსწავლე, რომელიც არის მე-6 კლასში, გამოიძახე promote() და შემდეგ დაბეჭდე getInfo().

class SchoolPupil {
    constructor(name, gradeLevel) {
        this.name = name;
        this.gradeLevel = gradeLevel;
    }

    promote() {
        this.gradeLevel++;
    }

    getInfo() {
        return `${this.name} არის მე-${this.gradeLevel} კლასის მოსწავლე`;
    }
}

const pupil = new SchoolPupil("ნიკა", 6);

pupil.promote();

console.log(pupil.getInfo());


// 4) შექმენი კლასი PiggyBank. მას აქვს მხოლოდ ერთი თვისება: coins (მონეტების რაოდენობა, თავიდან არის 0).
// addCoins(amount) — ყულაბაში ამატებს მითითებულ რაოდენობა მონეტას.
// buyToy(cost) — პარამეტრად იღებს სათამაშოს ფასს.
// თუ ყულაბაში საკმარისი მონეტებია (coins >= cost), მონეტებს აკლდება სათამაშოს ფასი და ბეჭდავს: "სათამაშო ნაყიდია!".
// თუ მონეტები არ გეყოფა, ბეჭდავს: "არ გაქვს საკმარისი მონეტები!".
// ჩააგდე ყულაბაში 10 მონეტა, სცადე 15-მონეტიანი სათამაშოს ყიდვა, შემდეგ დაამატე კიდევ 10 და სცადე თავიდან.

class PiggyBank {
    constructor() {
        this.coins = 0;
    }

    addCoins(amount) {
        this.coins += amount;
    }

    buyToy(cost) {
        if (this.coins >= cost) {
            this.coins -= cost;
            console.log("სათამაშო ნაყიდია!");
        } else {
            console.log("არ გაქვს საკმარისი მონეტები!");
        }
    }
}

const bank = new PiggyBank();

bank.addCoins(10);
bank.buyToy(15); 

bank.addCoins(10);
bank.buyToy(15); 

console.log(bank.coins); 