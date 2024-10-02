function ceil(n){
    if (modulo(n*10,10)==0){
        return n
    }
    if (n<0){
        return trunc(n)-1
    }
    return trunc(n)+1
}
function floor(n){
    if ( Math.abs(modulo(n*10,10))>=5){
        return ceil(n)
    }
    if (n<0){
        return trunc(n)-1
    }
    return trunc(n)
}
function round(n){
    if (Math.abs(modulo(n*10,10))>=5){
        return ceil(n)
    }
    return floor(n)
}
function trunc(n){
   return n>>0;
}
// console.log(ceil(-3.7))

// console.log(round(3.7),round(-3.7),round(3.1),round(-3.1))

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