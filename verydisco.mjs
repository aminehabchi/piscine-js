import { argv } from 'node:process';
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




console.log(s);


