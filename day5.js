const fs = require('fs');

Array.prototype.transpose = function() {
    return this[0].map((_, i) => this.map(row => row[i]));
  }

  // part 1
const grid = fs
    .readFileSync('day5.txt', { encoding: 'utf-8' })
    .split('\n\n')[0]
    .split('\n')
    .slice(0, -1)
    .map((line) => [...line].filter((_, index) => index % 4 === 1))
    .reverse()
    .transpose()
    .map((stack) => stack.filter((crate) => crate !== ' ' && crate !== undefined));

const instructions = fs
    .readFileSync('day5.txt', { encoding: 'utf-8' })
    .split('\n\n')[1]
    .split('\n')
    .map((line) => {
        let [, count, from, to] = line.match(/^move (\d+) from (\d+) to (\d+)$/).map(Number);
        return {count, from, to};
    });

for (let {count, from, to} of instructions) {
    for (let i = 1; i <= count; i++) {
        grid[to -1].push(grid[from -1].pop());
    }
}
const final1 = grid
    .map((stack) => {
        let index = stack.length; 
        return stack[index - 1];
    }).join('');
console.log('Part I: ', final1)

// part II
const grid2 = fs
    .readFileSync('day5.txt', { encoding: 'utf-8' })
    .split('\n\n')[0]
    .split('\n')
    .slice(0, -1)
    .map((line) => [...line].filter((_, index) => index % 4 === 1))
    .reverse()
    .transpose()
    .map((stack) => stack.filter((crate) => crate !== ' ' && crate !== undefined));

const instructions2 = fs
    .readFileSync('day5.txt', { encoding: 'utf-8' })
    .split('\n\n')[1]
    .split('\n')
    .map((line) => {
        let [, count, from, to] = line.match(/^move (\d+) from (\d+) to (\d+)$/).map(Number);
        return {count, from, to};
    });

for (let {count, from, to} of instructions2) {
    grid2[to - 1].push(...grid2[from - 1].splice(-count));
}
const final2 = grid2
    .map((stack) => {
        let index = stack.length; 
        return stack[index - 1];
    }).join('');
console.log('Part II: ', final2)
