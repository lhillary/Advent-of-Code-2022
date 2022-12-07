const fs = require('fs');
const datastream = fs
    .readFileSync('day6.txt', { encoding: 'utf-8' })
    .split('')

const chunk = 4;
const chunk2 = 14;
let answer = 0;
let answer2 = 0;

let fours = datastream.reduce((c, v, i, a) => {
  if (i + chunk <= a.length) c.push(a.slice(i, i + chunk));
  return c;
}, []);

for (let i = 0; i < fours.length; i++) {
    let unique = [...new Set(fours[i])]
    if (unique.length === 4) {
        answer = i + 4;
        break;
    }
}

let fourteens = datastream.reduce((c, v, i, a) => {
    if (i + chunk2 <= a.length) c.push(a.slice(i, i + chunk2));
    return c;
}, []);

for (let i = 0; i < fourteens.length; i++) {
    let unique = [...new Set(fourteens[i])]
    if (unique.length === 14) {
        answer2 = i + 14;
        break;
    }
}

console.log(answer, answer2);

