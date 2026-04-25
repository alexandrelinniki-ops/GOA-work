// 1) for ციკლის საშუალებით 1 დან 20 ის ჩათვლით გამოიტანეთ მხოლოდ ლუწი რიცხვები

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 2) for ციკლის საშუალებით გადაუარეთ მასივს და შეამოწმეთ და გამოიტანეთ მხოლოდ ის, რომლის სიგრძე იქნება 5

let fruits = ["apple", "grape", "banana", "peach", "melon", "mango"];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length === 5) {
        console.log(fruits[i]);
    }
}