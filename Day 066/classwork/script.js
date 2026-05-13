// 1. შექმენი ობიექტი სახელით store, რომელსაც ექნება შემდეგი თვისებები:
// apples: 15
// bananas: 13
// oranges: 14
// დაამატე მეთოდი applyDiscount, რომელიც არგუმენტად მიიღებს პროცენტს (მაგალითად, 10 ნიშნავს 10 ლარის ფასდაკლებას).
// გამოიყენე ციკლი: მეთოდის შიგნით გამოიყენე for...in ციკლი, რათა გადაუარო ობიექტის ყველა პროდუქტს.
// შეცვალე მნიშვნელობა: ციკლის დახმარებით თითოეულ პროდუქტს გამოაკელი შესაბამისი პროცენტი და განაახლე მნიშვნელობა ობიექტში.
// გამოიძახე მეთოდი: დააკონსოლე ობიექტი მეთოდის გამოძახებამდე და გამოძახების შემდეგ, რათა დარწმუნდე, რომ ფასები შეიცვალა.

const store = {
    apples: 15,
    bananas: 13,
    oranges: 14,

    applyDiscount(percent) {
        for (let i in this) {
            if (typeof this[i] === "number") {
                let discount = this[i] * (percent / 100);

                this[i] -= discount;
            }
        }
    }
}

console.log("Before discount:");
console.log(store);

store.applyDiscount(10);

console.log("After discount:");
console.log(store);