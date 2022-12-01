const fs = require('fs');

// reading and basic formatting of initial file
const lines = fs
    .readFileSync('day1.txt', { encoding: 'utf-8' })
    .split('\n\n')
    .map((x) => x.split('\n'))
    .map((x) => x.reduce((acc, x) => parseInt(acc) + parseInt(x), 0));

// finding largest for part I
const largest = Math.max(...lines);

// find top three largest for part II
const topThreeLargest = [...lines]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, x) => acc + x, 0);

console.log(largest, topThreeLargest);