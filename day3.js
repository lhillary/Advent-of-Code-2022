const fs = require('fs');
const dictionary = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 10,
  "k": 11,
  "l": 12,
  "m": 13,
  "n": 14,
  "o": 15,
  "p": 16,
  "q": 17,
  "r": 18,
  "s": 19,
  "t": 20,
  "u": 21,
  "v": 22,
  "w": 23,
  "x": 24,
  "y": 25,
  "z": 26,
  "A": 27,
  "B": 28,
  "C": 29,
  "D": 30,
  "E": 31,
  "F": 32,
  "G": 33,
  "H": 34,
  "I": 35,
  "J": 36,
  "K": 37,
  "L": 38,
  "M": 39,
  "N": 40,
  "O": 41,
  "P": 42,
  "Q": 43,
  "R": 44,
  "S": 45,
  "T": 46,
  "U": 47,
  "V": 48,
  "W": 49,
  "X": 50,
  "Y": 51,
  "Z": 52
};
// reading and basic formatting of initial file
const lines = fs
    .readFileSync('day3.txt', { encoding: 'utf-8' })
    .split('\n')
    .map((str) => {
      return [str.slice(0, str.length / 2), str.slice(str.length / 2, str.length)];
    });

const lines2 = fs
    .readFileSync('day3.txt', { encoding: 'utf-8' })
    .split('\n')
    .reduce((res, el, i) => {
      if (i % 3 === 0) {
        res[res.length] = [el];
      } else {
        res[res.length-1] = [...res[res.length-1], el];
      }
      return res
    }, [])

let letters2 = [];
for (let k = 0; k < lines2.length; k++) {
  let letter = [];
  let first = lines2[k][0];
  let second = lines2[k][1];
  let third = lines2[k][2]
  for (let h in first) {
    let match = (second.includes(first[h]) && third.includes(first[h])) ? first[h] : null;
    if (match !== null) letter.push(match)
  }
  letters2.push(letter[0])
}

let numbers2 = letters2.map((letter) => {
  return dictionary[letter];
}).reduce((acc, x) => acc + x);

let letters = [];

for (let i = 0; i < lines.length; i++) {
  let letter = [];
  let first = lines[i][0];
  let second = lines[i][1];
  for (let j in first) {
    let match = second.includes(first[j]) ? first[j] : null;
    if (match !== null) letter.push(match)
  }
  letters.push(letter[0])
}

let numbers = letters.map((letter) => {
  return dictionary[letter];
}).reduce((acc, x) => acc + x);

console.log(numbers, numbers2);