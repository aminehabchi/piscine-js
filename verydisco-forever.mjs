import { argv } from 'node:process';
import fs from 'fs';
let s = ""
// print process.argv

let val = argv[2]

val = val.split(' ')

for (let i = 0; i < val.length; i++) {
    let l = Math.ceil(val[i].length / 2)
    s = s + val[i].slice(l, val[i].length) + val[i].slice(0, l)
    if (i != val.length - 1) {
        s = s + " "
    }
}


fs.writeFile("verydisco-forever.txt", s, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`Disco-fied text written to verydisco-forever.txt`);
    }
});