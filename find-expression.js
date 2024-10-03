
function findExpression(num,n=1,s="1"){
    if (n>num){
        return 'undefined'
    }
    if (n==num){
        return s
    }
    let a=findExpression(num,n+4,s+" "+add4)
    if (a!='undefined'){
        return a
    }
    a=findExpression(num,n*2,s+" "+mul2)
    if (a!='undefined'){
        return a
    }
    return 'undefined';
}
const add4 = '+4'
const mul2 = '*2'