// 1) უკუთვლა: დაწერე for ციკლი, რომელიც კონსოლში გამოიტანს რიცხვებს 10-დან 1-მდე (უკუსვლით).

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 2) ლუწი რიცხვები: for ციკლით დაბეჭდე 1-დან 20-მდე მხოლოდ ლუწი რიცხვების ჯამი.

let sum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);


// 3) მასივზე გადავლა: შექმენი მასივი let fruits = ['apple', 'peach', 'grape', 'banana'];. 
// for ციკლის გამოყენებით დაბეჭდე fruit is და შემდეგ თითოეეული ხილი.

let fruits = ['apple', 'peach', 'grape', 'banana'];

for (let i = 0; i < fruits.length; i++) {
    console.log(`fruit is ${fruits[i]}`)
}


// 4) რიცხვების ჯამი: დათვალე 1-დან 50-მდე ყველა რიცხვის ჯამი for ციკლის გამოყენებით და შედეგი დაბეჭდე.

for (let i = 1; i <= 50; i++) {
    console.log(i)
}


// 5) დამატება ბოლოში: შექმენი ცარიელი მასივი let colors = [];. 
// push() მეთოდის გამოყენებით სათითაოდ დაუმატე შენი საყვარელი 3 ფერი.

let colors = [];

colors.push('red');
colors.push('blue');
colors.push('green');

console.log(colors);
// 6) ამოღება ბოლოდან: მოცემულია let numbers = [1, 2, 3, 4, 5];. 
// pop() მეთოდით ამოიღე ბოლო ელემენტი და დაბეჭდე როგორც ამოღებული რიცხვი, ისე განახლებული მასივი.

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop());
console.log(numbers);


// 7) ამოღება დასაწყისიდან: მოცემულია let animals = ['dog', 'cat', 'fish'];. 
// shift() მეთოდით წაშალე პირველი ელემენტი და დაბეჭდე მასივი.

let animals = ['dog', 'cat', 'fish'];

animals.shift();
console.log(animals)


// 8) indexOf - პოზიციის პოვნა: შექმენი მასივი let tech = ['HTML', 'CSS', 'JavaScript', 'React']; 
// იპოვე JavaScript-ის ინდექსი (მერამდენე პოზიციაზე დგას) indexOf() მეთოდით.

let tech = ['HTML', 'CSS', 'JavaScript', 'React']; 

console.log(tech.indexOf('JavaScript'))