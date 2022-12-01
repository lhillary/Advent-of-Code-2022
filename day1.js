const fs = require('fs');

// reading and basic formatting of initial file
const lines = fs
    .readFileSync('day1.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n\n')
    .map((x) => x.split('\n').map(Number));

// split into multidimensional array
const summed = lines.map((line) => {
    return line.reduce((acc, x) => acc + x, 0);
});

// finding largest for part I
const largest = Math.max(...summed);

// logging solution to part I
console.log(largest)

// find top three largest for part II
const topThreeLargest = [...summed].sort((a, b) => b - a).slice(0, 3);

// sum top three largest together
const topThreeSummed = [...topThreeLargest].reduce((acc, x) => acc + x, 0);

// logging answer to part II
console.log(topThreeSummed);