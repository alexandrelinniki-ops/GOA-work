import {findMax,validatePassword, getPositiveEvens, calculateAverage, countPositivesAndSumNegatives} from "./script.js";

// 1)

findMax(15, 42, 8);
findMax(10, "hello", 25);

// 2)

validatePassword("pass1234");
validatePassword("short1");
validatePassword("onlyletters");
validatePassword("12345678");

// 3)

const numbersList = [-4, -2, 0, 1, 2, 3, 4, 5, 6, 8, 10];

const positiveEvens = getPositiveEvens(numbersList);
console.log("დადებითი და ლუწი რიცხვები:", positiveEvens); 

const sampleArray = [10, 20, 30, 40];
const avg = calculateAverage(sampleArray);
console.log("მასივის [10, 20, 30, 40] საშუალოა:", avg); 

// 4)
const mixedArray = [1, 2, 3, 4, 5, -1, -2, -3, -4];

const result = countPositivesAndSumNegatives(mixedArray);
console.log(`დადებითების რაოდენობა: ${result.positiveCount}`); 
console.log(`უარყოფითების ჯამი: ${result.negativeSum}`);