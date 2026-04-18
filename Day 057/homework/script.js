// 1) შექმენი Arrow Function, რომელიც მიიღებს ცელსიუსს (C), გადაიყვანს ფარენჰაიტში (F) ფორმულით: F = C * 1.8 + 32.

const celsiusToFahrenheit = (C) => C * 1.8 + 32;

console.log(celsiusToFahrenheit(0));   
console.log(celsiusToFahrenheit(25));


// 2) შექმენი Arrow Function, რომელიც გამოითვლის ყოველთვიურ გადასახადს. ფუნქციამ უნდა მიიღოს ორი პარამეტრი: amount (მთლიანი თანხა) და years (წლების რაოდენობა). გაყავი თანხა თვეების რაოდენობაზე და მიღებულ შედეგს დაუმატე მომსახურების საკომისიო — ფიქსირებული 5 ლარი.

const monthlyPayment = (amount, years) => {
  const months = years * 12;
  return amount / months + 5;
};

console.log(monthlyPayment(1200, 1));
console.log(monthlyPayment(2400, 2));


// 3) შექმენი Arrow Function, რომელიც მიიღებს ერთ სტრიქონს (password). ფუნქციამ უნდა დააბრუნოს true, თუ პაროლის სიგრძე არის 8 სიმბოლოზე მეტი. სხვა შემთხვევაში დააბრუნოს false.

const lenOfPassword = (password) => password.length > 8;
    
console.log(lenOfPassword("Hello"));
console.log(lenOfPassword("HelloWorld"));