// 1) https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/train/python

function firstDup(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i + 1).includes(s[i])) {
      return s[i];
    }
  }

  return;
}


// 2) https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/python

function solve(s, g) {
  if (s % g !== 0) {
    return -1;
  }

  let a = g;
  let b = s - g;

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  if (gcd(a, b) === g) {
    return [a, b];
  }

  return -1;
}


// 3) https://www.codewars.com/kata/583989556754d6f4c700018e/train/python

function multiples(a, b, limit) {
  let mult = [];

  for (let i = 1; i <= limit; i++) {
    if (i % a === 0 && i % b === 0) {
      mult.push(i);
    }
  }

  return mult;
}


// 4) https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0/train/python

function wrap(height, width, length) {
  let sides = [height, width, length].sort((a, b) => a - b);

  return 2 * (sides[2] + sides[0]) + 2 * (sides[1] + sides[0]) + 20;
}


// 5) https://www.codewars.com/kata/5ff2093d375dca00170057bc/train/python

function rotations(dice) {
  let opposite = {
    1: 6,
    6: 1,
    2: 5,
    5: 2,
    3: 4,
    4: 3
  };

  let minimum = dice.length;

  for (let num of dice) {
    let count = 0;

    for (let d of dice) {
      if (d === num) {
        continue;
      } else if (d === opposite[num]) {
        count += 2;
      } else {
        count++;
      }
    }

    minimum = Math.min(minimum, count);
  }

  return minimum;
}