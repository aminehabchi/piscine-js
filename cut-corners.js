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
function trunc(x) {
    return divide(x*10,10);
  }
// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log("roud",nums.map(round))
//  console.log("foor",nums.map(floor))
//  console.log("trunc",nums.map(trunc))
//  console.log("ciel",nums.map(ceil))

function modulo(dividend, divisor) {
    if (divisor === 0) {
      throw new Error("Divisor cannot be zero");
    }
  
    let absDividend =dividend;
    if (absDividend<0){
        absDividend=absDividend*-1
    }
    let absDivisor = divisor;
    if (absDivisor<0){
        absDivisor=absDivisor*-1
    }
    // Repeatedly subtract the divisor from the dividend until it's smaller than the divisor
    while (absDividend >= absDivisor) {
      absDividend -= absDivisor;
    }
  
    // Return the correct sign of the result
    return dividend < 0 ? -absDividend : absDividend;
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