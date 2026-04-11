// 1)
let myList = [10, "Hello", true, null, {name: "Alex"}, [1, 2, 3]];
let randomIndex = Math.floor(Math.random() * myList.length);
let randomElement = myList[randomIndex];
console.log(randomElement);

// 2)
let myAge = 14;
const birthYear = 2012;
myAge = 15;
console.log("Age:", myAge);
console.log("Birth Year:", birthYear);
/*
let - მნიშვნელობის შეცვლა შეიძლება;
const - ერთხელ მინიჭების შემდეგ შეცვლა არ შეიძლება;
*/

// 3)
let balance = 100;
balance += 50;
balance -+ 30;
balance *= 2;
console.log(balance);

// 4)
let likes = 15;
likes ++;
console.log(`After like: ${likes}`)
likes --;
console.log(`After unlike: ${likes}`)

// 5)
let firstName = "Alexandre";
let lastName = "Linniki";
let city = "Tbilisi";
let greeting1 = "გამარჯობა, მე ვარ " + firstName + " " + lastName + " და ვცხოვრობ ქალაქ " + city + "-ში.";
let greeting2 = `გამარჯობა, მე ვარ ${firstName} ${lastName} და ვცხოვრობ ქალაქ ${city}-ში.`;
console.log(greeting1);
console.log(greeting2);
// concatenation - ტექსტების ხელით შეერთებაა საჭირო
// interpolation - უფრო მარტივია და სუფთა მეთოდია
// პრაქტიკაში, უმეტესად Template Literals უფრო მოსახერხებელია.