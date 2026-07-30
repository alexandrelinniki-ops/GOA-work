// 1)
const findMax = (a, b, c) => {
    if(typeof a !== "number" || Number.isNaN(a) || typeof b !== "number" || Number.isNaN(b) || typeof c !== "number" || Number.isNaN(c)){
        console.log("შეცდომა: გთხოვთ გადასცეთ მხოლოდ რიცხვები!");
    }
    return Math.max(a, b, c);
}

// 2)
const validatePassword = (password) => {
    const letters = "abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nums = "0123456789"

    if(typeof password !== "string"){
        return false;
    }

    const isLongEnough = password.length >= 8;
    const hasLetter = letters.test(password);
    const hasNumber = nums.test(password);
    return isLongEnough && hasLetter && hasNumber;
}

// 3)
const getPositiveEvens = (arr) => {
    if(!Array.isArray(arr)){
        return [];
    }
    return arr.filter((num) => typeof num === "number" && num > 0 && num % 2 === 0);
}

const calculateAverage = (arr) =>{
    if (!Array.isArray(arr) || arr.length === 0){
        return 0;
    } 

    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

// 4)
const countPositivesAndSumNegatives = (arr) => {
    if (!Array.isArray(arr)) {
        return { positiveCount: 0, negativeSum: 0 };
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (const num of arr) {
        if (typeof num === "number") {
            if (num > 0) {
                positiveCount++;
            } else if (num < 0) {
                negativeSum += num;
            }
        }
    }

  return {positiveCount, negativeSum};
}

export {findMax,validatePassword,getPositiveEvens,calculateAverage,countPositivesAndSumNegatives}