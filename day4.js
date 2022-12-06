const fs = require('fs');

// reading and basic formatting of initial file
const range = (start, stop) =>  [...Array(stop - start + 1)].map((_, i) => start + i);

const lines = fs
    .readFileSync('day4.txt', { encoding: 'utf-8' })
    .split('\n')
    .map((line) => {
      let first = line.split(',')[0].split('-'),
          second = line.split(',')[1].split('-');
      first = range(parseInt(first[0]), parseInt(first[1]));
      second = range(parseInt(second[0]), parseInt(second[1]));

      let contains1 = first.every(num => {
        return second.includes(num);
      });
      let contains2 = second.every(num => {
        return first.includes(num);
      });
      
      return (contains1 || contains2) ? true : false;
    }).filter((value) => value === true).length

const lines2 = fs
    .readFileSync('Day4.txt', { encoding: 'utf-8' })
    .split('\n')
    .map((line) => {
      let first = line.split(',')[0].split('-'),
          second = line.split(',')[1].split('-');
      first = range(parseInt(first[0]), parseInt(first[1]));
      second = range(parseInt(second[0]), parseInt(second[1]));

      let dupes1 = first.some(num => {
        return second.includes(num);
      });
      let dupes2 = second.some(num => {
        return first.includes(num);
      });
      
      return (dupes1 || dupes2) ? true : false;
    }).filter((value) => value === true).length

console.log(lines, lines2);