// 1) // class BankAccount{
//     constructor(name, lastName, balance){
//         this.name = name
//         this.lastName = lastName
//         this.balance = balance
//     }

//     backOut(num){
//         if(this.balance<num){
//             console.log(${this.lastName}, თქვენს ანგარიშზე ამდენი თანხა არ არის);
//             return
//         }else{
//             console.log(${this.lastName} თანხა წარმატებით გამოიტანეთ);
//             this.balance = this.balance - num
//             console.log(თქვენ ანგარიშზე დარჩენილია $${this.balance});
//         }
//     }

//     inOut(num1){
//         this.balance += num1
//         console.log(თქვენს ანგარიშზე თანხა წარმატებით შეიტანეთ თანხა შეადგენს $${this.balance});
//     }
// }

// const myBank = new BankAccount("Test", "Testaze", 1257.82)
// myBank.backOut(1200.81)
// myBank.inOut(12)
// ამ კოდს დაუმატეთ ფუნქცია რომ თუ მომხმარებელი პაროლს სწორს არ შეიყვანს არ შეეძლება არც თანხის შეტანა და გამოტანა მინიშნება: კონტრუქტორში უნდა დაამატოთ ერთი პარამეტრი

class BankAccount {
    constructor(name, lastName, balance, password) {
        this.name = name;
        this.lastName = lastName;
        this.balance = balance;
        this.password = password;
    }

    backOut(num, password) {
        if (password !== this.password) {
            console.log("არასწორი პაროლი!");
            return;
        }

        if (this.balance < num) {
            console.log(`${this.lastName}, თქვენს ანგარიშზე ამდენი თანხა არ არის`);
            return;
        }

        console.log(`${this.lastName} თანხა წარმატებით გამოიტანეთ`);
        this.balance -= num;
        console.log(`თქვენს ანგარიშზე დარჩენილია $${this.balance}`);
    }

    inOut(num, password) {
        if (password !== this.password) {
            console.log("არასწორი პაროლი!");
            return;
        }
this.balance += num;
        console.log(
            `თქვენს ანგარიშზე თანხა წარმატებით შეიტანეთ. თანხა შეადგენს $${this.balance}`
        );
    }
}

const myBank = new BankAccount(
    "Test",
    "Testaze",
    1257.82,
    "1234"
);

myBank.backOut(100, "1111");
myBank.backOut(100, "1234");
myBank.inOut(50, "1234");
// 2) შექმენით კლასი TaxiTrip რომელიც კონსტრუქტორში მიიღებს driverName და pricePerKm 
// დაამატე თვისება totalDistance(საწყისი 0) დაამატე მეთოდი startTrip(km) 
// რომელიც გადაცემულ km დაუმატებს totalDistance და კონსოლში დაბეჭდავს მგზავრობის ღირებულებას

class TaxiTrip {
    constructor(driverName, pricePerKm) {
        this.driverName = driverName;
        this.pricePerKm = pricePerKm;
        this.totalDistance = 0;
    }

    startTrip(km) {
        this.totalDistance += km;

        const cost = km * this.pricePerKm;

        console.log(`მძღოლი: ${this.driverName}`);
        console.log(`გავლილი მანძილი: ${km} კმ`);
        console.log(`მგზავრობის ღირებულება: ${cost} ლარი`);
    }
}

const trip = new TaxiTrip("Giorgi", 2);
trip.startTrip(10);
trip.startTrip(5);
console.log(`სულ გავლილია: ${trip.totalDistance} კმ`);


// 3) შექმენით კლასი FitnessTracker კონსტრუქტორში დააყენეთ ორი თვისება steps, caloriesBurned 
// ორივე საწყისად 0 დაამატეთ მეთოდი walk(stepsCount) 
// რომელიც გაზრდის ნაბიჯების რაოდენობას 100 ით ყოველ 1000 ნაბიჯზე caloriesBurned ს დაუმატეთ 50 და გამოიტანეთ ბოლოს მონაცემები

class FitnessTracker {
    constructor(steps, caloriesBurned) {
        this.steps = 0;
        this.caloriesBurned = 0;
    }

    walk(stepsCount) {
        this.steps += stepsCount;
        this.caloriesBurned += Math.floor(stepsCount / 1000) * 50;

        console.log(`ნაბიჯები: ${this.steps}`);
        console.log(`დამწვარი კალორიები: ${this.caloriesBurned}`);
    }
}

const tracker = new FitnessTracker();
tracker.walk(2500);
tracker.walk(1500);
// 4) შექმენით კლასი Thermostat სადაც მიმდინარე ტემპერატურა(temperature) იქნება 22 გრადუსი 
// დაამატეთ მეთოდები warmUp() და coolDown() გააკეთეთ უსაფრთხოების წესი: 
// ტემპერატურა არ უნდა ავიდეს 30 ზე ზემოთ და არ უნდა ჩამოვიდეს 16 ზე ქვემოთ.

class Thermostat {
    constructor(temperature) {
        this.temperature = 22;
    }

    warmUp() {
        if (this.temperature < 30) {
            this.temperature++;
            console.log(`ტემპერატურა გაიზარდა: ${this.temperature}°C`);
        } else {
            console.log("ტემპერატურა 30°C-ზე მეტს ვერ მიაღწევს!");
        }
    }

    coolDown() {
        if (this.temperature > 16) {
            this.temperature--;
            console.log(`ტემპერატურა შემცირდა: ${this.temperature}°C`)
        } else {
            console.log("ტემპერატურა 16°C-ზე ქვემოთ ვერ ჩამოვა!")
        }
    }
}

const thermostat = new Thermostat();
thermostat.warmUp();
thermostat.coolDown();