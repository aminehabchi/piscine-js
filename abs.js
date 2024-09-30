function isPositive(a){
    if (a>0){
        return true
    }
    return false
}
function abs(a){
    if (isPositive(a)){
        return a
    }
    return a*-1
}