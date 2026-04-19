// 1)გადახედეთ ამ გვერდს https://www.w3schools.com/js/js_scope.asp


// 2)ახსენით რა არის block scope, global scope და მოიძიეთ ინფორმაცია lexical scope ზე და ეგეც ახსენით

// Global scope ნიშნავს ცვლადებს, რომლებიც გამოცხადებულია კოდის გარეთ.
// Block scope ნიშნავს ცვლადებს, რომლებიც შექმნილია { } ფიგურულ ფრჩხილებში.
// Lexical scope ნიშნავს, რომ ცვლადების ხილვადობა განისაზღვრება იმით, სად არის კოდში დაწერილი ფუნქცია (მისი მდებარეობით).

// 3)გააკეთეთ თითო მაგალითი თითო scope ზე და ახსენით კომენტარებით

// Global scope:
const name = "Alex";

function sayHello() {
  return `Hello ${name}`;
}

console.log(name); 
// ჩვეულებრივად გამოაქვს name

// Block scope:
if (true) {
  const age = 16;
  console.log(age);
}

console.log(age);
// არ გამოაქვს age და ერორს აგდებს
