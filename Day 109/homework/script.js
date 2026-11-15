// 1) https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript

function checkAlive(health) {
  if (health > 0) {
    return true;
  } else {
    return false;
  }
}


// 2) https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s){
  let even = "";
  let odd = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      even += s[i];
      odd += s[i].toUpperCase();
    }
  }
}


// 3) https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}


// 4) https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}


// 5) https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/javascript

function KISS(words) {
  let arr = words.split(" ");
  
  for (let word of arr) {
    if (word.length > arr.length) {
      return "Keep It Simple Stupid";
    }
  }

  return "Good work Joe!";
}