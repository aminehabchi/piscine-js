import { argv } from 'node:process';
import fs from 'fs';
let s = ""
let filePath = argv[2]

fs.readFile(filePath, 'utf8', (err, val) => {
    if (err) {
        console.error('Error reading the file:', err);
    } else {
        val = val.split(' ')

        for (let i = 0; i < val.length; i++) {
            let l = Math.floor(val[i].length / 2)
            s = s + val[i].slice(l, val[i].length) + val[i].slice(0, l)
            if (i != val.length - 1) {
                s = s + " "
            }
        }

        console.log(s)
    }
});









