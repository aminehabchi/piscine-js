function cutFirst(s){
    return s.slice(2)
}
function cutLast(s){
    return s.slice(0,-2)
}
function cutFirstLast(s){
    s=s.slice(2)
    s=s.slice(0,-2)
    return s
}
function keepFirst(s){
    return s.slice(s,2)
}
function keepLast(s){
    return s.slice(-2)
}
function keepFirstLast(s){
    if (s.length<=4){
        return s
    }
    return keepFirst(s)+keepLast(s)
}
