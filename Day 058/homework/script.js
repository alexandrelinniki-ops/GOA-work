// 1)ახსენით ეს მეთოდები კომენტარებით და მოიყვანეთ 2-2 მაგალითი თითოეულზე:
// .length
// .join()
// .toString()
// .pop()
// .push()
// .shift()
// Array.isArray();
// .concat()
// .slice()
// .splice()

// .length
// აბრუნებს მასივის (ან სტრინგის) სიგრძეს

let arr1 = [1, 2, 3, 4];
console.log(arr1.length); // 4

let text = "Hello";
console.log(text.length); // 5

// .join()
// აერთიანებს მასივის ელემენტებს ერთ სტრინგად (separator-ის გამოყენებით)

let arr2 = ["a", "b", "c"];
console.log(arr2.join("-")); // "a-b-c"

let arr3 = [1, 2, 3];
console.log(arr3.join(" ")); // "1 2 3"

// .toString()
// მასივს ან სხვა მნიშვნელობას გადააქცევს სტრინგად

let arr4 = [1, 2, 3];
console.log(arr4.toString()); // "1,2,3"

let num = 123;
console.log(num.toString()); // "123"

// .pop()
// შლის მასივის ბოლო ელემენტს და აბრუნებს მას

let arr5 = [1, 2, 3];
arr5.pop();
console.log(arr5); // [1, 2]

let arr6 = ["a", "b", "c"];
let last = arr6.pop();
console.log(last); // "c"

// .push()
// ამატებს ელემენტს მასივის ბოლოში

let arr7 = [1, 2];
arr7.push(3);
console.log(arr7); // [1, 2, 3]

let arr8 = ["a"];
arr8.push("b", "c");
console.log(arr8); // ["a", "b", "c"]

// .shift()
// შლის მასივის პირველ ელემენტს და აბრუნებს მას

let arr9 = [1, 2, 3];
arr9.shift();
console.log(arr9); // [2, 3]

let arr10 = ["a", "b"];
let first = arr10.shift();
console.log(first); // "a"

// Array.isArray()
// ამოწმებს არის თუ არა მნიშვნელობა მასივი

console.log(Array.isArray([1, 2, 3])); // true

console.log(Array.isArray("hello")); // false

// .concat()
// აერთიანებს ორ ან მეტ მასივს ახალ მასივში

let arr11 = [1, 2];
let arr12 = [3, 4];
let result1 = arr11.concat(arr12);
console.log(result1); // [1, 2, 3, 4]

let result2 = arr11.concat([5, 6]);
console.log(result2); // [1, 2, 5, 6]

// .slice()
// აბრუნებს მასივის ნაწილს (არ ცვლის ორიგინალ მასივს)

let arr13 = [1, 2, 3, 4];
console.log(arr13.slice(1, 3)); // [2, 3]

let arr14 = ["a", "b", "c"];
console.log(arr14.slice(1)); // ["b", "c"]

// .splice()
// ცვლის მასივს (შლის ან ამატებს ელემენტებს)

let arr15 = [1, 2, 3, 4];
arr15.splice(1, 2); // index 1-დან შლის 2 ელემენტს
console.log(arr15); // [1, 4]

let arr16 = ["a", "b", "c"];
arr16.splice(1, 0, "x"); // index 1-ზე ამატებს "x"
console.log(arr16); // ["a", "x", "b", "c"]


// 2) შეასწორე Scope Pollution (დაბინძურება)
// ქვემოთ მოცემულ კოდში ფუნქცია changePrice შემთხვევით ცვლის გლობალურ ფასს. შეასწორე კოდი ისე, რომ ფუნქციამ შექმნას საკუთარი ლოკალური ცვლადი და არ შეეხოს გლობალურს.
/*
let price = 100;

const changePrice = () => {
    price = 50; // აქ არის შეცდომა
    console.log("ახალი ფასი ფუნქციაში:", price);
};

changePrice();
console.log("გლობალური ფასი:", price); // აქ 100 უნდა ეწეროს
*/
// რადგან ფუნქცია პირდაპირ ცვლის გლობალურ ცვლადს price - ს.
// სინამდვილეში უნდა ეწეროს ესე:

let price = 100;

const changePrice = () => {
    let price = 50; // ლოკალური ცვლადი (არ ეხება გლობალურს)
    console.log("ახალი ფასი ფუნქციაში:", price);
};

changePrice();
console.log("გლობალური ფასი:", price); // 100 (არ შეცვლილა)


// 3) პარამეტრები და Scope
// ფუნქციის პარამეტრებიც ლოკალური სკოუპის ნაწილია. გამოიცანი შედეგი:
let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);
// კითხვა: რატომ არ შეიცვალა გლობალური hero Superman-ით? და რა როლი ითამაშა აქ "Iron Man"-მა?
// რადგან ფუნქციაში transform(hero) პარამეტრი hero არის ლოკალური ცვლადი და ეს არ არის იგივე რაც გლობალური hero
// "Iron Man" - ს გადაეცა ფუნქციის პარამეტრს (hero)
