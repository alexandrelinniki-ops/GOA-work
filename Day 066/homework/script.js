// 1. შექმენი ფუნქცია , რომელიც იღებს ორ პარამეტრს:  და .robotFactorymodelmobile
// ფუნქციამ უნდა დააბრუნოს ობიექტი.
// დაამატე მეთოდი , რომელიც კონსოლში დაწერს: "Beep Boop! მე ვარ [model]".beep()

function robotFactory(model, mobile) {
    const robot = {
        model: model,
        mobile: mobile,

        beep() {
            console.log("Beep Boop! მე ვარ " + this.model);
        }
    };

    return robot;
}

const robot1 = robotFactory("TeslaBot", true);

robot1.beep();


// 2. შექმენი ობიექტი , რომელსაც ექნება თვისება  და მეთოდი . მეთოდმა -ის გამოყენებით უნდა დაპრინტოს თქვენი სახელი.personfirstNamesayHellothis

const person = {
    firstName: "Alexandre",

    sayHello() {
        console.log(this.firstName);
    }
};

person.sayHello();


// 3. შექმენი ობიექტი  (მართკუთხედი), რომელსაც ექნება  (სიგანე) და  (სიმაღლე). დაამატე Getter სახელად , რომელიც დააბრუნებს მათ ნამრავლს.rectanglewidthheightarea (ფორმულ არის სიგანე გამრავლებული სიმაღლეზე)

const rectangle = {
    width: 10,
    height: 5,

    get area() {
        return this.width * this.height;
    }
};

console.log(rectangle.area);