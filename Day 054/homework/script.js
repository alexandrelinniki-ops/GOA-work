// 1)
// Math.round()
// ამრგვალებს რიცხვს უახლოეს მთელ რიცხვამდე

console.log(Math.round(4.3));   // 4
console.log(Math.round(4.5));   // 5
console.log(Math.round(7.8));   // 8
console.log(Math.round(2.1));   // 2
console.log(Math.round(-3.6));  // -4

// Math.abs()
// აბრუნებს რიცხვის აბსოლუტურ მნიშვნელობას (ყოველთვის დადებითს)

console.log(Math.abs(-5));   // 5
console.log(Math.abs(10));   // 10
console.log(Math.abs(-3.7)); // 3.7
console.log(Math.abs(0));    // 0
console.log(Math.abs(-100)); // 100

// Math.floor()
// ამრგვალებს რიცხვს ქვემოთ (ყველაზე ახლო პატარა მთელ რიცხვამდე)

console.log(Math.floor(4.9));  // 4
console.log(Math.floor(7.1));  // 7
console.log(Math.floor(2.5));  // 2
console.log(Math.floor(-3.2)); // -4
console.log(Math.floor(9.99)); // 9

// Math.ceil()
// ამრგვალებს რიცხვს ზემოთ (ყველაზე ახლო დიდ მთელ რიცხვამდე)

console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(7.2));  // 8
console.log(Math.ceil(2.01)); // 3
console.log(Math.ceil(-3.8)); // -3
console.log(Math.ceil(6.5));  // 7

// Math.sign()
// აბრუნებს რიცხვის ნიშანს (-1, 0, ან 1)

console.log(Math.sign(10));   // 1
console.log(Math.sign(-5));   // -1
console.log(Math.sign(0));    // 0
console.log(Math.sign(7.2));  // 1
console.log(Math.sign(-0.3)); // -1

// Math.random()
// აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
