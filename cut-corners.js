function ceil(n){
    n=n*10
    if (modulo(n,10)!=0){
        n/=10
        return (n>>>0)+1
    }
    n/=10
    return n
}
function floor(n){
    return n>>>0
}
function round(n){
    n=n*10
    if (modulo(n,10)>=5){
        n/=10
        return (n>>>0)+1
    }
    n/=10
    return n>>0
}
function trunc(n){
    return n>>0;
}
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