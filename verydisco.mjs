import { argv } from 'node:process';
let s = ""
// print process.argv
for (let j = 2; j < argv.length; j++) {
    let val = argv[j]
    val = val.split(' ')
    for (let i = 0; i < val.length; i++) {
        let l = Math.ceil(val[i].length / 2)
        if (val[i].length%2==1){
            l=Math.ceil((val[i].length-1) / 2)
            s = s + val[i].slice(l+1, val[i].length)+val[i][l] + val[i].slice(0, l)
        }else{

            s = s + val[i].slice(l, val[i].length) + val[i].slice(0, l)
        }
    }

    if (j != argv.length - 1) {
        s = s + " "
    }
}

console.log(s);

