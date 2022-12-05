const fs = require('fs');
const { parentPort } = require('worker_threads');

const characterMap = {
    'A': 1, //rock
    'B': 2, //paper
    'C': 3, // scissors
    'X': 1, // rock
    'Y': 2, // paper
    'Z': 3 // scissors
}

// rock(1) beats scissors (3) = -2
// rock(1) loses paper(2) = -1
// paper(2) beats rock(1) = 1
// paper(2) loses scissors(3) = 1
// scissors(3) beats paper(2) = 1
// scissors(3) loses rock(1) = 2

// reading and basic formatting of initial file
const lines = fs
    .readFileSync('day2.txt', { encoding: 'utf-8' })
    .split('\n')
    .map((line) => {
        return line.split(' ').map((x) => {
            return characterMap[x];
        })
    }).map((line) => {
        let evaluation = line.reduce((acc, x) => {
            if (acc === x) return 3;
            if ((acc === 1 && x === 2) || (acc === 2 && x === 3) || (acc === 3 && x === 1)) return 6;
            else return 0;
        });
        let final = [];final.push(line[1], evaluation);
        return final.reduce((acc, x) => acc + x);
    }).reduce((acc, score) => acc + score);

const lines2 = fs
    .readFileSync('day2.txt', { encoding: 'utf-8' })
    .split('\n')
    .map((line) => {
        return line.split(' ').map((x) => {
            return characterMap[x];
        })
    }).map((line) => {
        let evaluation = line.reduce((acc, x) => {
            if (x === 2) return acc + 3;
            if (x === 1) {
                if (acc === 1) return 3;
                if (acc === 2) return 1;
                if (acc === 3) return 2;
            }
            if (x === 3) {
                if (acc === 1) return 2 + 6;
                if (acc === 2) return 3 + 6;
                if (acc === 3) return 1 + 6;
            }
        })
        return evaluation;
    }).reduce((acc, score) => acc + score);


console.log(lines2)

// if (letter == 'A')  letter = 1
// if (letter === 'B') letter = 2
// if (letter === 'C') letter = 3
// if (letter === 'X') letter = 1
// if (letter === 'Y') letter = 2
// if (letter === 'Z') letter = 3

// A == 1
// B == 2
// C == 3

// X == 1
// Y == 2
// Z == 2
