function multiply(a,b){
    let n=0
    for (let i=0;i<b;i++){
        n=n+a
    }
    return n
}
function divide(a,b){
    let n=0
    while (a>0){
        n++
        a-=b
    }
    return n
}
function modulo(a,b){
    while (a>0){

        a-=b
    }
    if (a==0){
        return 0
    }
    return a*-1
}