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
function trunc(n){
    
   return divide(n*10,10);
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
    a=Math.abs(a)
    b=Math.abs(b)
    
    a= a-multiply(divide(a,b),b)

    if (sign==true){
        return Number("-"+a)
    }
    return a
}
function multiply(a,b){
    let sign=false
    if ((a<0 && b>0) || (a>0 && b<0)){
        sign=true
    }
        a=Math.abs(a)
        b=Math.abs(b)
    
    let n=0
    for (let i=0;i<b;i++){
        n=n+a
    }
    if (sign==true){
        return Number("-"+n)
    }
    return n
}
function divide(a,b){
    let sign=false
    if ((a<0 && b>0) || (a>0 && b<0)){
        sign=true
    }
    a=Math.abs(a)
    b=Math.abs(b)
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
        return Number("-"+n)
    }
    return n
}