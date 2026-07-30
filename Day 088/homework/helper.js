// 1) შექმენი მოდული cartUtils.js, სადაც იქნება ფუნქციები:
// calculateTotal(cart) — ითვლის კალათაში არსებული პროდუქტების ჯამურ ღირებულებას.
// applyDiscount(total, discountPercent) — ითვლის ფასდაკლებულ თანხას.

const calculateTotal = (cart) => {
    return cart.reduce((sum, product) => sum + product.price, 0);
}

const applyDiscount = (total, discountPercent) => {
    return total - (total * discountPercent) / 100;
}


// 2) შექმენი მოდული mathSimple.js ორი ფუნქციით: square(n) (კვადრატში აყვანა) და cube(n) 
// (კუბში აყვანა).

const square = (n) => {
    return n ** 2;
}

const cube = (n) => {
    return n ** 3;
}


// 3) შექმენი მოდული discount.js Default (ნაგულისხმევი) ექსპორტით, 
// რომელიც იღებს საწყის ფასს და პროცენტს, შემდეგ კი აბრუნებს საბოლოო ფასს.

const calculateDiscount = (price, percent) => {
    return price - (price * percent) / 100;
}


// 4) შექმენი მოდული arrayHelpers.js ორი მარტივი ფუნქციით:
// getFirst(arr) — აბრუნებს მასივის პირველ ელემენტს.
// getLast(arr) — აბრუნებს მასივის ბოლო ელემენტს.

const getFirst = (arr) => {
    return arr[0];
}

const getLast = (arr) => {
    return arr[arr.length - 1];
}


// export

export {calculateTotal, applyDiscount, square, cube, calculateDiscount, getFirst, getLast}