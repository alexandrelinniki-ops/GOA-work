// 1) https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug)
    years ++
  }
  
  return years
}


// 2) https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}


// 3) https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) { 
  let sLower = s.toLowerCase(); 
  for (let i = 0; i < sLower.length; i++) { 
    if (sLower.split(sLower[i]).length - 1 === 1) { 
      return s[i]; 
    } 
  } 
  return ""; 
}


// 4) https://www.codewars.com/kata/57f8ff867a28db569e000c4a

function kebabize(str) {
  let result = ""; 
  
  for (let i = 0; i < str.length; i++) { 
    if (str[i] >= "A" && str[i] <= "Z") { 
      if (result.length > 0) { 
        result += "-"; 
      } 
      result += str[i].toLowerCase(); 
    } else if (str[i] >= "a" && str[i] <= "z") { 
      result += str[i]; 
    }
  }
  return result
}


// 5) https://www.codewars.com/kata/5878520d52628a092f0002d0

function stringTransformer(str) {
  let words = str.split(" ").reverse(); 
  let result = "";
  
  for (let i = 0; i < words.length; i++) { 
    for (let x = 0; x < words[i].length; x++) { 
      if (words[i][x] === words[i][x].toUpperCase()) { 
        result += words[i][x].toLowerCase(); 
      } else { 
        result += words[i][x].toUpperCase(); 
      } 
    } if (i < words.length - 1) { 
      result += " "; 
    } 
  } 
  
  return result;
  
}


// 6)https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

function evil(n) {
  let ones = n.toString(2).split("1").length - 1; 
  if (ones % 2 === 0) { 
    return "It's Evil!"; 
  } else { 
    return "It's Odious!"; 
  }
}


// 7)https://www.codewars.com/kata/5388f0e00b24c5635e000fc6

function swapValues(args) { 
  let temp = args[0]; 
  args[0] = args[1]; 
  args[1] = temp; 
  
  return args; 
}


// 8)https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x){
  return x.split(" ").join("")
}