// 1) მოიძიეთ ინფორმაცია Ternary Operatorზე

// Ternary Operator არის მოკლე ფორმა if...else-ის.
condition ? valueIfTrue : valueIfTrue;
// თუ პირობა (condition) მართალია → შესრულდება valueIfTrue
// თუ არა → შესრულდება valueIfTrue
let age = 18;
age >= 18 ? "Adult" : "Minor";


// 2) ახსენით რა განსხვავებაა ტერნარი ოპერატორსა და ჩვეულებრივ ifelse შორის 

// if...else - უფრო გრძელია და უფრო მარტივად იკითხება რთულ ლოგიკაში
let age1 = 18;
let result1;

if (age1 >= 18) {
  result1 = "Adult";
} else {
  result1 = "Kid";
}
// Ternary Operator - მოკლეა, კომპაქტურია და უკეთესია მარტივი პირობებისთვის
age >= 18 ? "Adult" : "Kid";


// 3) Ternary Operator დახმარებით შეამოწმეთ userAge არის თუ არა სრულწლოვანი

let userAge = 17;
userAge >= 18 ? console.log("Adult") : console.log("Kid");
// 4) ახსენით რა არის helper function

// Helper function არის დამხმარე ფუნქცია, რომელიც გამოიყენება სხვა ფუნქციის გასამარტივებლად.
// ის არ არის მთავარი ფუნქცია, მაგრამ ეხმარება მთავარ ფუნქციას კონკრეტული პატარა ამოცანის შესრულებაში.

// 5) რით განსხვავდება helper main function-სგან

// Main function (მთავარი ფუნქცია)
// ასრულებს ძირითად ლოგიკას

// Helper function (დამხმარე ფუნქცია)
// აკეთებს პატარა, კონკრეტულ დავალებას
// გამოიყენება main function-ის შიგნით

// main = “რა უნდა გავაკეთოთ”
// helper = “როგორ გავაკეთოთ პატარა ნაწილებად”