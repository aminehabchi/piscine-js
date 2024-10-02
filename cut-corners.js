function ceil(n){
    if (modulo(n*10,10)==0){
        return n
    }
    if (n<0){
        return trunc(n)
    }
    return trunc(n)+1
}
function floor(n){
    if ( Math.abs(modulo(n*10,10))==0){
        return (n)
    }
    if (n<0){
        return trunc(n)-1
    }
    return trunc(n)
}
function round(n){
    if (n<0){
        if (Math.abs(modulo(n*10,10))>=5){
            return floor(n)
        }
        return ceil(n)
    }
    if (Math.abs(modulo(n*10,10))>=5){
        return ceil(n)
    }
    return floor(n)
    
}
function findNearest(x) {
    let num = 0;
    if (x < 1 && x >= 0) return 0
    if (x < 0 && x >= -1) return 0
    for (let i = x; i > 1; i = i / 2) {
        num += 1;
    }
    return num - 1
}
function trunc(x) {
    let i = 2 ** findNearest(x);
    if (x >= 0) {
        for (; i < x;) {
            i++
        }
        if (i === x) return i
        return i - 1
    }
    if (x < 0) {
        i = 0
        for (; i > x;) {
            i--
        }
        if (x > -1) return -0
        if (i === x) return i
        return i + 1
    }
}
// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log("roud",nums.map(round))
//  console.log("foor",nums.map(floor))
//  console.log("trunc",nums.map(trunc))
//  console.log("ciel",nums.map(ceil))

function modulo(a,b){
    let sign=false
    if (a<0){
        sign=true
    }
    if (a<0){
        a=a*-1
    }
    if (b<0){
        b=b*-1
    }
    a= a-multiply(divide(a,b),b)

    if (sign==true){
        return a*-1
    }
    return a
}
function multiply(a,b){
    let sign=false
    if ((a<0 && b>0) || (a>0 && b<0)){
        sign=true
    }
    
    if (a<0){
        a=a*-1
    }
    if (b<0){
        b=b*-1
    }
    
    let n=0
    for (let i=0;i<b;i++){
        n=n+a
    }
    if (sign==true){
        return n*-1
    }
    return n
}
function divide(a,b){
    let sign=false
    if ((a<0 && b>0) || (a>0 && b<0)){
        sign=true
    }
    if (a<0){
        a=a*-1
    }
    if (b<0){
        b=b*-1
    }
    if (a<b){
        return 0;
    }
    let n=0
    while (a>0){
        a-=b
        n++   
    }
    if (a<0){
        n--
    }
    if (sign==true){
        return n*-1
    }
    return n
}