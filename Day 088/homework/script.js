import {calculateTotal, applyDiscount, square, cube, calculateDiscount, getFirst, getLast} from "./helper.js";

// 1)

const cart = [
    {name: "Phone", price: 1000},
    {name: "Mouse", price: 100}
];

const total = calculateTotal(cart);

console.log("Total:", total);
console.log("After Discount:", applyDiscount(total, 20));


// 2) 

console.log(square(5)); 
console.log(cube(5)); 


// 3)

console.log(calculateDiscount(200, 25)); 
console.log(calculateDiscount(1000, 10)); 


// 4)

const numbers = [10, 20, 30, 40, 50];

console.log(getFirst(numbers));
console.log(getLast(numbers));