// 1) https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript

function helloWorld() {
  var str = "Hello World!";
  console.log(str);
}


// 2) https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

function trueOrFalse(val) {
  if (val) {
    return "true";
  } else {
    return "false";
  }
}


// 3) https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}


// 4) https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
  let a = v1,
      b = v1;
  return a + b; // 50 + 50 = 100
}

function equal2() {
  let a = v3,
      b = v1;
  return a - b; // 150 - 50 = 100
}

function equal3() {
  let a = v5,
      b = v1;
  return a * b; // 2 * 50 = 100
}

function equal4() {
  let a = v4,
      b = v5;
  return a / b; // 200 / 2 = 100
}

function equal5() {
  let a = v6,
      b = v3;
  return a % b; // 250 % 150 = 100
}


// 5) https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript

function Dad() {
  return "D" + "a" + "d";
}

function Bee() {
  return "B" + "e" + "e";
}

function banana() {
  return "b" + "a" + "n" + "a" + "n" + "a";
}