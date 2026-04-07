// 1)
/*.length
.charAt(index)
.at()
.slice(startIndex,endIndex)
.toUpperCase()
.toLowerCase()
.trim()
.trimStart()
.trimEnd()
.repeat()
.replace()
.replaceAll()
.split()*/

// .length - აბრუნებს სტრინგის სიმბოლოების რაოდენობას

let text1 = "Hello";
console.log(text1.length); // 5

let text2 = "JavaScript";
console.log(text2.length); // 10

// .charAt(index) - აბრუნებს სიმბოლოს მითითებულ ინდექსზე

let word1 = "Hello";
console.log(word1.charAt(0)); // H

let word2 = "Coding";
console.log(word2.charAt(3)); // i

// .at() - აბრუნებს სიმბოლოს მითითებულ ინდექსზე (შეიძლება უარყოფითი ინდექსიც)

let word3 = "Hello";
console.log(word3.at(1)); // e

let word4 = "JavaScript";
console.log(word4.at(-1)); // t

// .slice(startIndex, endIndex) - ჭრის სტრინგის ნაწილს startIndex-დან endIndex-მდე

let str1 = "JavaScript";
console.log(str1.slice(0,4)); // Java

let str2 = "Programming";
console.log(str2.slice(3,7)); // gram

// .toUpperCase() - სტრინგს გადააქცევს დიდ ასოებად

let text3 = "hello";
console.log(text3.toUpperCase()); // HELLO

let text4 = "javascript";
console.log(text4.toUpperCase()); // JAVASCRIPT

// .toLowerCase() - სტრინგს გადააქცევს პატარა ასოებად

let text5 = "HELLO";
console.log(text5.toLowerCase()); // hello

let text6 = "CODE";
console.log(text6.toLowerCase()); // code

// .trim() - შლის ცარიელ ადგილებს სტრინგის დასაწყისში და ბოლოს

let text7 = "   hello   ";
console.log(text7.trim()); // hello

let text8 = "   JavaScript   ";
console.log(text8.trim()); // JavaScript

// .trimStart() - შლის ცარიელ ადგილებს მხოლოდ სტრინგის დასაწყისში

let text9 = "   hello";
console.log(text9.trimStart()); // hello

let text10 = "   code";
console.log(text10.trimStart()); // code

// .trimEnd() - შლის ცარიელ ადგილებს მხოლოდ სტრინგის ბოლოს

let text11 = "hello   ";
console.log(text11.trimEnd()); // hello

let text12 = "JavaScript   ";
console.log(text12.trimEnd()); // JavaScript

// .repeat() - იმეორებს სტრინგს მითითებული რაოდენობით

let text13 = "Hi ";
console.log(text13.repeat(3)); // Hi Hi Hi

let text14 = "JS ";
console.log(text14.repeat(2)); // JS JS

// .replace() - ცვლის პირველ ნაპოვნ მნიშვნელობას

let text15 = "Hello world";
console.log(text15.replace("world", "JavaScript")); // Hello JavaScript

let text16 = "I like cats";
console.log(text16.replace("cats", "dogs")); // I like dogs

// .replaceAll() - ცვლის ყველა ერთნაირ მნიშვნელობას

let text17 = "cat cat cat";
console.log(text17.replaceAll("cat","dog")); // dog dog dog

let text18 = "JS is fun. JS is easy.";
console.log(text18.replaceAll("JS","JavaScript")); // JavaScript is fun. JavaScript is easy.

// .split() - სტრინგს ყოფს მასივად მითითებული გამყოფით

let text19 = "apple,banana,orange";
console.log(text19.split(",")); // ["apple","banana","orange"]

let text20 = "Hello world";
console.log(text20.split(" ")); // ["Hello","world"]


// 2)
// .charAt() და .at() ორივე გამოიყენება სტრინგიდან კონკრეტული სიმბოლოს მისაღებად ინდექსის მიხედვით
// მთავარი განსხვავება:
// 1) .charAt() ვერ მუშაობს უარყოფით ინდექსზე
// თუ უარყოფით რიცხვს მივუთითებთ, აბრუნებს ცარიელ სტრინგს ""
// 2) .at() მუშაობს უარყოფით ინდექსზეც
// უარყოფითი ინდექსი ნიშნავს სტრინგის ბოლოდან წაკითხვას
// მოკლედ განსხვავება:
// .charAt() → მხოლოდ დადებითი ინდექსები
// .at() → დადებითი და უარყოფითი ინდექსები (ბოლოდანაც შეუძლია წაკითხვა)

