function sign(a){
    if (a==0){
        return 0
    }
    if (a<0){
        return -1
    }
    return 1
}
function sameSign(a,b){
    if (sign(a)==sign(b)){
        return true
    }
    return false
}